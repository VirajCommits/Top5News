import requests
from flask import Flask


def get_top_news(api_key):
    url = 'https://newsapi.org/v2/top-headlines'
    params = {
        'apiKey': '89ecde770296447dbdc30a4ed662f72e',
        'language': 'en',
        'sortBy': 'publishedAt',
        'pageSize': 5,
        'category': 'general'
    }

    response = requests.get(url, params=params)
    if response.status_code == 200:
        data = response.json()
        if 'articles' in data:
            return data['articles']
        else:
            return f"Error: 'articles' not found in response. Response content: {data}"
    else:
        return f"Failed to retrieve news: {response.status_code} - {response.text}"
app = Flask(__name__)
@app.route("/COMPANYnews")
def getNews():
    api_key = '89ecde770296447dbdc30a4ed662f72e'  # Replace 'your_api_key_here' with your actual NewsAPI key
    top_news = get_top_news(api_key)
    return top_news
    
    if isinstance(top_news, str):  # Check if the function returned an error message
        print(top_news)
    else:
        for i, article in enumerate(top_news, 1):
            print(f"News {i}: {article['title']}")
            print(f"Description: {article['description']}")
            print(f"URL: {article['url']}\n")

if __name__ == "__main__":
    app.run(debug = True)

