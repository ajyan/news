import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import ArticleList from './ArticleComponents/ArticleList';
import Nav from './Nav';

function App() {
  const key = process.env.REACT_APP_NEWS_API_KEY;
  let [searchTerm, setSearchTerm] = useState('');
  const topHeadlinesUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;
  let [newsList, setNewsList] = useState([]);
  let searchUrl = `https://newsapi.org/v2/top-headlines?q=${searchTerm}&apiKey=${key}`;

  const handleSearch = () => {
    if (searchTerm.length < 3) {
      window.alert('Search term must be at least 3 characters!');
    }
    axios
      .get(searchUrl)
      .then(({ data: { articles } }) => {
        if (articles.length > 0) {
          setNewsList(articles);
        } else {
          // handle empty search term, send back to original news list
          window.alert(`No articles found for ${searchTerm}`);
        }
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
  };

  // Initial fetch of articles for populating list of articles
  useEffect(() => {
    axios
      .get(topHeadlinesUrl)
      .then(({ data: { articles } }) => {
        setNewsList(articles);
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
  }, []);

  return (
    <div className="App">
      <Nav setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
      <ArticleList newsList={newsList} />
    </div>
  );
}

export default App;
