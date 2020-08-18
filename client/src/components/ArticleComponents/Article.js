import React, { useState } from 'react';

let Article = ({
  title,
  url,
  description,
  urlToImage,
  publishedAt,
  content,
  source,
}) => {
  let [showMore, setShowMore] = useState(false);
  var date = new Date(publishedAt).toDateString();
  return (
    <>
      <br />
      <div className="card shadow p-3 mb-5 bg-white rounded">
        <img src={urlToImage} className="card-img" alt="" />
        <div className="card-body">
          <a className="card-title" href={url}>
            {title.split(' - ')[0]}
          </a>
          <p className="card-text">{description}</p>
          {!showMore ? (
            <button
              onClick={() => {
                setShowMore(!showMore);
              }}
              className="btn btn-warning"
              href="#"
            >
              See More
            </button>
          ) : (
            <>
              <div>{content.split('[+')[0]}</div>
              <br />
              <p>
                <strong>Published: </strong>
                {date}
              </p>
              <p>
                <strong>Source: </strong>
                {source}
              </p>
              <button
                onClick={() => {
                  setShowMore(!showMore);
                }}
                className="btn btn-warning"
              >
                See Less
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Article;