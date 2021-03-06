import Article from './Article';
import React from 'react';

const ArticleList = ({ newsList, handleSave }) => {
  return (
    <div className="col-xs-1" align="center">
      {newsList.map(
        (
          {
            title,
            description,
            author,
            publishedAt,
            url,
            urlToImage,
            content,
            source: { name },
          },
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
              content={content}
              source={name}
              handleSave={handleSave}
            />
          );
        }
      )}
    </div>
  );
};

export default ArticleList;
