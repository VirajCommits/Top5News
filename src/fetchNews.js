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
