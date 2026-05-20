from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

from models.device_model import Device
from utils.db import db

import random
import string

device_bp = Blueprint("device", __name__)
def generate_pairing_code():

    return ''.join(
        random.choices(
            string.ascii_uppercase + string.digits,
            k=6
        )
    )
@device_bp.route("/register", methods=["POST"])
def register_device():

    data = request.get_json()

    device_uid = data.get("device_uid")

    existing_device = Device.query.filter_by(
        device_uid=device_uid
    ).first()

    if existing_device:

        return jsonify({
            "message": "Device already registered",
            "pairing_code": existing_device.pairing_code
        })

    pairing_code = generate_pairing_code()

    new_device = Device(
        device_uid=device_uid,
        pairing_code=pairing_code
    )

    db.session.add(new_device)
    db.session.commit()

    return jsonify({
        "message": "Device registered",
        "pairing_code": pairing_code
    })
@device_bp.route("/pair", methods=["POST"])
@jwt_required()
def pair_device():

    data = request.get_json()

    pairing_code = data.get("pairing_code")

    user_id = get_jwt_identity()

    device = Device.query.filter_by(
        pairing_code=pairing_code
    ).first()

    if not device:

        return jsonify({
            "error": "Invalid pairing code"
        }), 404

    device.owner_id = user_id

    device.is_paired = True

    db.session.commit()

    return jsonify({
        "message": "Device paired successfully"
    })