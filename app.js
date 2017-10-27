const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'search',
    message: 'What do you want to search Rotten Tomatoes for?'
  }
];

console.log('Welcome to the Rotten Tomatoes web scraper');

inquirer.prompt(questions).then(answers => {
  console.log('answers', answers)
});
