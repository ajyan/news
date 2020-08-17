import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import Article from './Article';

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
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand">Navbar</a>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
      {isFetching && <p>Loading...</p>}
      <div class="col-xs-1" align="center">
        {newsList.map(
          (
            { title, description, author, publishedAt, url, urlToImage },
            idx
          ) => {
            return (
              <Article
                key={idx}
                title={title}
                description={description}
                author={author}
                publishedAt={publishedAt}
                url={url}
                urlToImage={urlToImage}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default App;
