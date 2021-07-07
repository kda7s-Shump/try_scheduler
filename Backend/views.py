from flask import Blueprint, jsonify

from .decolator import content_type

app = Blueprint('main', __name__)

@app.route('/')
def hello_world():
    return "Hello, world!"

@app.route('/hello', methods=["GET"])
@content_type('application/json')
def hello():
    return jsonify(
        {
            "message": "Hello, world!",
            "メッセージ": "ハローワールド！"
        }
    )