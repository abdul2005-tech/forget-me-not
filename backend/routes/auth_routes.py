from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token

from models.user_model import User
from utils.db import db

import bcrypt

auth_bp = Blueprint("auth", __name__)

# SIGNUP API
@auth_bp.route("/signup", methods=["POST"])
def signup():

    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    # Check if user already exists
    existing_user = User.query.filter_by(email=email).first()

    if existing_user:
        return jsonify({
            "error": "User already exists"
        }), 400

    # Hash password
    hashed_password = bcrypt.hashpw(
        password.encode("utf-8"),
        bcrypt.gensalt()
    )

    # Create new user
    new_user = User(
        name=name,
        email=email,
        password_hash=hashed_password.decode("utf-8")
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({
        "message": "User created successfully"
    }), 201


# LOGIN API
@auth_bp.route("/login", methods=["POST"])
def login():

    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    # Find user
    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({
            "error": "Invalid email or password"
        }), 401

    # Check password
    password_correct = bcrypt.checkpw(
        password.encode("utf-8"),
        user.password_hash.encode("utf-8")
    )

    if not password_correct:
        return jsonify({
            "error": "Invalid email or password"
        }), 401

    # Generate JWT token
    access_token = create_access_token(identity=user.id)

    return jsonify({
        "message": "Login successful",
        "token": access_token,
        "user": user.to_dict()
    }), 200