import Article from './Article';
import React from 'react';

const ArticleList = ({ newsList, handleSave }) => {
  const checkSaved = (title) => {
    const currentStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    for (let i = 0; i < currentStorage.length; i++) {
      if (currentStorage[i].title === title) {
        return true;
      }
    }
    return false;
  };
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
              saved={checkSaved(title)}
            />
          );
        }
      )}
    </div>
  );
};

export default ArticleList;
