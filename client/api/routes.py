import datetime
from flask import Flask, jsonify, request
import json, os
from flask_cors import CORS
from dummy_data import DummyData


app = Flask(__name__, static_folder="../build", static_url_path="/")
CORS(app)

DD = DummyData()

@app.route('/')
@app.route('/index')
def index():
    return app.send_static_file("index.html")

@app.route('/api/connected')
def connected():
    return "you're connected!"

@app.route('/api/get_user_data')
def get_user_data():
    return DD.user_data

@app.route('/api/get_transaction_data')
def get_transaction_data():
    return DD.transaction_data

@app.route('/api/get_listing_data')
def get_listing_data():
    return DD.listing_data

@app.route('/api/get_user_profile_info')
def get_user_profile_info():
    return DD.user_profile_info

@app.route('/api/get_seller_page_info')
def get_seller_page_info():
    return DD.seller_page_info

@app.route('/api/get_seller_reviews')
def get_seller_reviews():
    return DD.seller_reviews

@app.route('/api/get_listing_reviews')
def get_listing_reviews():
    return DD.listing_reviews






