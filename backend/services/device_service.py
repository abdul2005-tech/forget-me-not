from datetime import datetime, timedelta

from models.device_model import Device
from utils.db import db

def update_device_status():

    devices = Device.query.all()

    current_time = datetime.utcnow()

    for device in devices:

        if device.last_seen:

            difference = current_time - device.last_seen

            if difference > timedelta(seconds=30):

                device.is_online = False

    db.session.commit()