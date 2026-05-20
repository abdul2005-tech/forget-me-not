from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token

from models.user_model import User
from utils.db import db

import bcrypt

auth_bp = Blueprint("auth", __name__)


# SIGNUP
@auth_bp.route("/signup", methods=["POST"])
def signup():

    try:

        data = request.get_json()

        name = data.get("name")
        email = data.get("email")
        password = data.get("password")

        # Check existing user
        existing_user = User.query.filter_by(
            email=email
        ).first()

        if existing_user:

            return jsonify({
                "error": "User already exists"
            }), 400

        # Hash password
        hashed_password = bcrypt.hashpw(
            password.encode("utf-8"),
            bcrypt.gensalt()
        ).decode("utf-8")

        # Create user
        new_user = User(
            name=name,
            email=email,
            password_hash=hashed_password
        )

        db.session.add(new_user)
        db.session.commit()

        return jsonify({
            "message": "Signup successful"
        }), 201

    except Exception as e:

        print("SIGNUP ERROR:")
        print(e)

        return jsonify({
            "error": str(e)
        }), 500


# LOGIN
@auth_bp.route("/login", methods=["POST"])
def login():

    try:

        data = request.get_json()

        email = data.get("email")
        password = data.get("password")

        user = User.query.filter_by(
            email=email
        ).first()

        if not user:

            return jsonify({
                "error": "Invalid credentials"
            }), 401

        password_correct = bcrypt.checkpw(
            password.encode("utf-8"),
            user.password_hash.encode("utf-8")
        )

        if not password_correct:

            return jsonify({
                "error": "Invalid credentials"
            }), 401

        access_token = create_access_token(
            identity=str(user.id)
        )

        return jsonify({
            "message": "Login successful",
            "token": access_token,
            "user": user.to_dict()
        }), 200

    except Exception as e:

        print("LOGIN ERROR:")
        print(e)

        return jsonify({
            "error": str(e)
        }), 500