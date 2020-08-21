module.exports = {
  removeDuplicates: (storage, article) => {
    for (let i = 0; i < storage.length; i++) {
      if (storage[i].title === article.title) {
        return storage;
      }
    }
    storage.unshift(article);
    return storage;
  },
  key: process.env.REACT_APP_NEWS_API_KEY,
};
