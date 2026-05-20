from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager

from config import Config
from utils.db import db

from models.user_model import User
from routes.auth_routes import auth_bp
from models.device_model import Device
from routes.device_routes import device_bp
from services.device_service import update_device_status
from routes.rfid_routes import rfid_bp

app = Flask(__name__)

app.config.from_object("config.Config")

CORS(
    app,
    resources={r"/*": {"origins": "*"}},
    supports_credentials=True
)

jwt = JWTManager(app)

db.init_app(app)
app.register_blueprint(
    auth_bp,
    url_prefix="/api/auth"
)
app.register_blueprint(
    device_bp,
    url_prefix="/api/device"
)
app.register_blueprint(rfid_bp, url_prefix="/api/rfid")

@app.route("/")
def home():
    return "Forget Me Not Backend Running"

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
        update_device_status()

    app.run(debug=True,host="0.0.0.0")