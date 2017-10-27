IMDB Web Scraper
=======================

### About
This project is a simple CLI web scraper which takes a user input and scrapes the results of an IMDB search.  The scraper visits IMDB.com, takes the user input, inserts it into the
search field and clicks the search button.  The results from the second page are then scraped and saved to a CSV file as **imdbResults.csv** in the project directory.

### Setup
Prerequisites:
* This project relies on [PhantomJS](http://phantomjs.org/) as a headless browser.  Please install before proceeding.

To run the project:

* install all project dependencies with `npm install`
* start the development server with `node app.js`

### Author
Justin Pacubas

### License
MIT
