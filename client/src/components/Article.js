import React, { useState } from 'react';

let Article = ({ title, url, description, urlToImage }) => {
  let [showMore, setShowMore] = useState(false);
  return (
    <>
      <br />
      <div className="card">
        <img src={urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title.split(' - ')[0]}</h5>
          <p className="card-text">{description}</p>
          <a href={url} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <br />
    </>
  );
};

export default Article;
