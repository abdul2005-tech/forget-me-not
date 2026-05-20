from utils.db import db

class Item(db.Model):

    __tablename__ = "items"

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    item_name = db.Column(
        db.String(100),
        nullable=False
    )

    rfid_uid = db.Column(
        db.String(100),
        unique=True,
        nullable=False
    )

    item_status = db.Column(
        db.String(20),
        default="SAFE"
    )

    last_scanned = db.Column(
        db.DateTime
    )