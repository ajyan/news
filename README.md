# The Buzz

## Table of Contents

- [Application Features](#application-features)
- [Requirements](#Requirements)
- [Getting Started](#Getting-Started)
- [Languages & Tools](#languages-&-tools)
- [License](#license)

# Application Features

- Each article contains a photo, a headline, and a description. Upon clicking the `See More` button, users can then see the article's content, published date, and news source
![](./GIFs/ArticleListScroll.gif)
- Users can submit a word in the search bar and return a list of relevant news articles 
![](./GIFs/search.gif)
- Users can save their favorite articles by selecting the `★` and the article is saved to their favorites, which can be found at the `Favorites` link in the nav bar
![](./GIFs/favorites.gif)
- Each set of articles, favorites, and search results has been paginated with a limit of five articles per page

## Requirements

To run this app, you will need Node.js and [yarn](https://classic.yarnpkg.com/en/) installed on your environement

You will also need to get an API key from [NewsAPI](https://newsapi.org/)

# Getting Started

## Install

    $ git clone https://github.com/ajyan/the-buzz.git
    $ cd client
    $ npm install

## Configure `.env`

Within the client directory, create a `.env` file and paste in your News API Key as `REACT_APP_NEWS_API_KEY = YOUR_KEY_HERE`

## Start & Watch

    $ npm start

The application will be running on port 3000

## Simple build for production

Within the client directory:

    $ npm run build
    $ serve -s build

The application will be running on port 5000

# Languages & Tools

### JavaScript

- [React](http://facebook.github.io/react) is used for UI

### CSS
- [Bootstrap](https://getbootstrap.com/docs/3.4/css/) as a basic styling framework

### HTTP Client Requests

- [Axios](https://www.npmjs.com/package/axios) to handle client side requests to the News API

## License

[MIT](https://choosealicense.com/licenses/mit/)
