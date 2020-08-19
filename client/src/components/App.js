import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

// React components
import ArticleList from './ArticleComponents/ArticleList';
import Nav from './Nav';
import Pagination from './Pagination';

function App() {
  const key = process.env.REACT_APP_NEWS_API_KEY;
  let [searchTerm, setSearchTerm] = useState('');
  let [newsList, setNewsList] = useState([]);

  //URLs for News API
  const topHeadlinesUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;
  let searchUrl = `https://newsapi.org/v2/everything?q=${searchTerm}&sortBy=popularity&apiKey=${key}`;

  // Pagination variables
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(5);

  // Get current articles
  const lastArticleIdx = currentPage * articlesPerPage;
  const firstArticleIdx = lastArticleIdx - articlesPerPage;
  const currentList = newsList.slice(firstArticleIdx, lastArticleIdx);

  const handleSearch = () => {
    if (searchTerm.length < 3) {
      window.alert('Search term must be at least 3 characters!');
    }
    axios
      .get(searchUrl)
      .then(({ data: { articles } }) => {
        if (articles.length > 0) {
          setNewsList(articles);
          setCurrentPage(1);
        } else {
          window.alert(`No articles found for ${searchTerm}`);
        }
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
  };

  const handleSave = (article) => {
    let currentStorage = JSON.parse(localStorage.getItem('favorites')) || {};
    const title = article.title;
    currentStorage[title] = article;
    localStorage.setItem('favorites', JSON.stringify(currentStorage));
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
      <ArticleList newsList={currentList} handleSave={handleSave} />
      <Pagination
        articlesPerPage={articlesPerPage}
        totalArticles={newsList.length}
        paginate={setCurrentPage}
      />
    </div>
  );
}

export default App;
