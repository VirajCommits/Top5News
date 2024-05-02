import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]); // Initializing with an empty array

  useEffect(() => {
    fetch("/COMPANYnews")
      .then(res => res.json())
      .then(data => {
        setData(data);
        console.log(data);
      });
  }, []); // Adding an empty dependency array to ensure the effect runs only once on mount

  return (
    <div>
      <h1>News Articles</h1>
      {data.map((article, index) => (
        <div key={index}> {/* Adding a key for list rendering */}
          <div><strong>Author:</strong> {article.author}</div>
          <div><strong>Title:</strong> {article.title}</div>
          <div><strong>Description:</strong> {article.description}</div>
          <div><strong>Content:</strong> {article.content}</div>
          <div><strong>Published At:</strong> {article.publishedAt}</div>
          <div><strong>Source:</strong> {article.source?.name}</div>
          <div><strong>URL:</strong> <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a></div>
          {article.urlToImage && (
            <div><strong>Image:</strong> <img src={article.urlToImage} alt="Article Image" style={{ maxWidth: '100%' }} /></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
