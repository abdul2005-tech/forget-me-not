from flask import Blueprint, request, jsonify

rfid_bp = Blueprint("rfid", __name__)

@rfid_bp.route("/scan", methods=["POST"])
def scan_rfid():

    data = request.get_json()

    rfid_uid = data.get("rfid_uid")

    print("RFID SCANNED:", rfid_uid)

    return jsonify({
        "message": "RFID received",
        "uid": rfid_uid
    }), 200