const inquirer = require('inquirer');
const Horseman = require('node-horseman');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    name: 'search',
    message: 'What do you want to search IMDB for?'
  }
];

const URL = 'https://www.imdb.com';

console.log('*** Welcome to the IMDB Web Scraper ***');
console.log('');
console.log('This app will take an input search term and scrape the results from IMDB');

inquirer.prompt(questions).then(answers => {
  const horseman = new Horseman();

  horseman
    .userAgent('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0')
    .open(URL)
    .type('input[name="q"]', answers.search)
    .click('button[id="navbar-submit-button"]')
    .waitForSelector('td[class="result_text"] > a')
    .evaluate(function() {
      const results = [];

      $('td[class="result_text"] > a').each(function(item) {
        const result = $(this).text();
        results.push(result);
      })
      return results;
    })
    .then(function(results) {
      const dataToWrite = results.map(result => {
        return `"${result}"`
      }).join(",\n");

      fs.writeFile('imdbResults.csv', dataToWrite, 'utf8', (err) => {
        if (err) {
          console.log('Error occured while saving scraping results', err);
        } else {
          console.log('Results saved!');
        }
      });
      return horseman.close();
    });
});
