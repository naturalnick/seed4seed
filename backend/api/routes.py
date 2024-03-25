import datetime
from flask import Flask, jsonify, request
import json, os
from flask_cors import CORS
from werkzeug.security import check_password_hash, generate_password_hash



app = Flask(__name__, static_folder="../build", static_url_path="/")
CORS(app)

@app.route('/')
@app.route('/index')
def index():
    return app.send_static_file("index.html")

@app.route('/api/connected')
def connected():
    return "you're connected!"