const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'search',
    message: 'What do you want to search Rotten Tomatoes for?'
  }
];

const URL = 'https://www.rottentomatoes.com';

console.log('*** Welcome to the Rotten Tomatoes Web Scraper ***');
console.log('');
console.log('This app will take an input search term and scrape the results from Rotten Tomatoes');

inquirer.prompt(questions).then(answers => {
  console.log('answers', answers)
});
