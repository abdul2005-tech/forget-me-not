from flask import Blueprint, jsonify

from models.item_model import Item

item_bp = Blueprint(
    "items",
    __name__
)

# GET ALL ITEMS

@item_bp.route("/", methods=["GET"])
def get_items():

    items = Item.query.all()

    return jsonify([
        {
            "id": item.id,
            "item_name": item.item_name,
            "rfid_uid": item.rfid_uid,
            "item_status": item.item_status,
            "last_scanned": str(item.last_scanned)
        }

        for item in items
    ])