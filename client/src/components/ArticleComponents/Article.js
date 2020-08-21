import React, { useState } from 'react';

let Article = ({
  title,
  url,
  description,
  urlToImage,
  publishedAt,
  content,
  source,
  handleSave,
}) => {
  let [showMore, setShowMore] = useState(false);
  let [saving, setSaving] = useState(false);
  var date = new Date(publishedAt).toDateString();

  return (
    <>
      <br />
      <div className="card shadow p-3 mb-5 bg-white rounded">
        <img src={urlToImage} className="card-img" alt="" />
        <div className="card-body">
          <a className="card-title" href={url}>
            {title && title.split(' - ')[0]}
          </a>
          <p className="card-text">{description}</p>
          {!showMore ? (
            <>
              {saving ? (
                <button
                  className="btn btn-warning add-button"
                  type="button"
                  disabled
                >
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Loading...</span>
                </button>
              ) : (
                <button
                  className="btn btn-warning add-button"
                  id="add-button"
                  onClick={() => {
                    let article = {
                      title: title,
                      url: url,
                      description: description,
                      urlToImage: urlToImage,
                      publishedAt: publishedAt,
                      content: content,
                      source: { name: source },
                    };
                    handleSave(article);
                    setSaving(true);
                    setTimeout(() => {
                      setSaving(false);
                    }, 500);
                  }}
                >
                  ★
                </button>
              )}
              <button
                onClick={() => {
                  setShowMore(!showMore);
                }}
                className="btn btn-warning"
                href="#"
              >
                See More
              </button>
            </>
          ) : (
            // Show more content
            <>
              <div>{content && content.split('[+')[0]}</div>
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
                className="btn btn-warning add-button"
                onClick={() => {
                  let article = {
                    title: title,
                    url: url,
                    description: description,
                    urlToImage: urlToImage,
                    publishedAt: publishedAt,
                    content: content,
                    source: source,
                  };
                  handleSave(article);
                }}
                id="add-button"
              >
                ★
              </button>
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
