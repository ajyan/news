import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

// React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// React components
import ArticleList from './ArticleComponents/ArticleList';
import Nav from './Nav';
import Pagination from './Pagination';

function App() {
  const key = process.env.REACT_APP_NEWS_API_KEY;
  let [searchTerm, setSearchTerm] = useState('');
  let [newsList, setNewsList] = useState([]);
  let [favesList, setFavesList] = useState(
    JSON.parse(localStorage.getItem('favorites'))
  );

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
  // const currentFavesList =
  //   favesList.slice(firstArticleIdx, lastArticleIdx) || [];

  // Get favorites
  const getFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    setFavesList(favorites);
    setCurrentPage(1);
  };

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
    let currentStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    currentStorage.push(article);
    localStorage.setItem('favorites', JSON.stringify(currentStorage));
    getFavorites();
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
      <Router>
        <Nav setSearchTerm={setSearchTerm} handleSearch={handleSearch} />

        <Switch>
          <Route path="/favorites">
            {console.log('loading', favesList)}
            {favesList && (
              <ArticleList newsList={favesList} handleSave={handleSave} />
            )}
            <Pagination
              articlesPerPage={articlesPerPage}
              totalArticles={newsList.length}
              paginate={setCurrentPage}
            />
          </Route>
          <Route path="/">
            <ArticleList newsList={currentList} handleSave={handleSave} />
            <Pagination
              articlesPerPage={articlesPerPage}
              totalArticles={newsList.length}
              paginate={setCurrentPage}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
