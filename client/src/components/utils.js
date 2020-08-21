module.exports = {
  removeDuplicates: (storage, article) => {
    for (let i = 0; i < storage.length; i++) {
      if (storage[i].title === article.title) {
        return storage;
      }
    }
    storage.push(article);
    return storage;
  };
}