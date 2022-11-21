const inquirer = require('inquirer');
const fs = require('fs');
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
          },
          {
            type: 'input',
            name: 'Id',
            message: "What is your employee ID",
          },
          {
            type: 'input',
            name: 'Contact',
            message: 'What is your email adress',
          },
          {
            type: 'input',
            name: 'Office_number',
            message: 'What is your office number',
          },
       
        ])
        .then((answers) => {
        const pagecontent = generateMarkdown(answers);