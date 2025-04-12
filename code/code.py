from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route('/news', methods=['GET'])
def get_news():
    api_url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=eva.barkalova-0'
    response = requests.get(api_url)
    data = response.json()
    return jsonify(data['articles'])

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, request, jsonify

app = Flask(__name__)

# In-memory list to store posts (not recommended for production; use a database instead)
posts = []

@app.route('/addPost', methods=['POST'])
def add_post():
    # Extract data from the request body
    post = request.get_json()
    posts.append(post)  # Add the post to the list
    return jsonify({'success': True})

if __name__ == '__main__':
    app.run(debug=True)
