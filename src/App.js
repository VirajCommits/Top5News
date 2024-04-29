import React, { useEffect } from 'react';
import './App.css';

import axios from 'axios';
function fetchNews() {
  axios.get('http://localhost:5000/api/news')
    .then(response => {
      console.log('News:', response.data);
    })
    .catch(error => {
      console.error('There was an error fetching the news:', error);
    });
}

function App() {
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
