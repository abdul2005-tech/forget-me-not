from utils.db import db

class Device(db.Model):

    __tablename__ = "devices"

    id = db.Column(db.Integer, primary_key=True)

    device_uid = db.Column(
        db.String(100),
        unique=True,
        nullable=False
    )

    pairing_code = db.Column(
        db.String(20),
        unique=True
    )

    is_paired = db.Column(
        db.Boolean,
        default=False
    )

    is_online = db.Column(
        db.Boolean,
        default=False
    )

    last_seen = db.Column(
        db.DateTime
    )

    owner_id = db.Column(
        db.Integer,
        db.ForeignKey("users.id")
    )