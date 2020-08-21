# The Buzz

[//]: # (Insert gif here)

## Table of Contents

- [Requirements](#Requirements)
- [Getting Started](#Getting-Started)
- [Application Features](#application-features)
- [Languages & Tools](#languages-&-tools)
- [License](#license)


## Requirements

To run this app, you will need Node.js installed on your environement.

You will also need to get an API key from [NewsAPI](https://newsapi.org/)

# Getting Started

## Install

    $ git clone https://github.com/ajyan/the-buzz.git
    $ cd client
    $ npm install

## Configure `.env`

Within the client directory, create a `.env` file and paste in your News API Key as `REACT_APP_NEWS_API_KEY = YOUR_KEY_HERE`


## Start & Watch
Within the client directory:
    $ npm start

# Application Features

- Each article contains a photo, a headline, and a description. Upon clicking the `See More` button, users can then see the content, the published date, as well as the source of the article
- Users can submit a query to the site and return a list of relevant news articles 
- Users can save their favorite articles by selecting the `★` and the article is saved to their favorites, which can be found at the `Favorites` link in the nav bar
- Article lists are paginated and limited to 5 articles per page


# Languages & Tools

### JavaScript

- [React](http://facebook.github.io/react) is used for UI.

### CSS

- [Bootstrap](https://getbootstrap.com/docs/3.4/css/) as a basic styling framework

### HTTP Client Requests

- [Axios](https://www.npmjs.com/package/axios) to handle client side requests to the News API

## License

[MIT](https://choosealicense.com/licenses/mit/)
