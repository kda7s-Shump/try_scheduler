from flask import Flask
from flask_cors import CORS

from .models import User
from .database import initialize_database
from .views import app as main_blueprint

def current_app():

    app = Flask(__name__)
    app.config.from_object('Backend.config.config')
    initialize_database(app)
    app.register_blueprint(main_blueprint)
    CORS(app)

    return app