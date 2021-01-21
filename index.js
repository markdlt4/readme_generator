const hi = "bye"
const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require('inquirer');
const fs = require('fs');
// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title',
    },
     {
         type: 'input',
         message: 'What is the project description?',
         name: 'description',
     },
     {
         type: 'input',
         message: 'Which license would you like to use for your application?',
         name: 'license',
     },
     {
        type: 'input',
        message: 'What is the github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is the your email address?',
        name: 'email address',
    },
    {
        type: 'output',
        message: 'Links in the Table of Contents',
        name: 'desired link',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
    err ? console.log(err) : console.log('Success!')
    )
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)

    .then((response) => {
        console.log(response.username)
        writeToFile("readme.md", generateMarkdown(response));
    });
}

// function call to initialize program
init();




