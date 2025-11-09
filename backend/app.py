from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/process', methods=['POST'])
def process_data():
    name = request.form.get('name')
    age = request.form.get('age')
    return jsonify({
        "message": f"Hello {name}, you are {age} years old.",
        "status": "Success"
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
