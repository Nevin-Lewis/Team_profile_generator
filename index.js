const inquirer = require('inquirer');
const NEXT = require('./src/code.js');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'Name',
            message: "What is the team manager's name?",
          },
          {
            type: 'input',
            name: 'Id',
            message: "What is your team manager's ID",
          },
          {
            type: 'input',
            name: 'Email',
            message: "What is the team manager's email adress",
          },
          {
            type: 'input',
            name: 'Office_number',
            message: "What is team manager's office number",
          },
          {
            type: "list",
            name: "Next_Steps",
            choices: ["Add an engineer", "Add an intern", "finish building my team"]
          }
       
        ])
        .then((answers) => {
        NEXT.Next(answers)
        })