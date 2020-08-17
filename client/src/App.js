import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  let [newsList, setNewsList] = useState([]);
  let [isFetching, setIsFetching] = useState(true);
  const key = process.env.REACT_APP_NEWS_API_KEY;
  const url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;

  // Initial fetch of articles for populating state
  useEffect(() => {
    axios
      .get(url)
      .then(({ data: { articles } }) => {
        console.log('response from url', articles);
        setNewsList(articles);
        setIsFetching(false);
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
  }, []);

  return (
    <div className="App">
      {isFetching && <p>Loading...</p>}
      {newsList.map((article) => {
        console.log(article);
      })}
    </div>
  );
}

export default App;
