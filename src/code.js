const Manager = require("../lib/Manager.js")
const Engineer= require("../lib/Engineer");
const Intern= require("../lib/intern");
const inquirer = require('inquirer');
const fs = require('fs');
var Employee_cards = [];

function Next({Name, Id, Email, Office_number, Next_Steps}) {
    Mymanager = new Manager(Name, Id, Email, Office_number);
    Employee_cards.push(generateManagercard(Mymanager))
    if(Next_Steps === "Add an engineer"){
        Engineer_Prompt()
        }
    else if(Next_Steps == "Add an intern"){
        Intern_Prompt();}
    else (createFile())
    }; 
function Add_Engineer({Name, Id, Contact, Github, Next_Steps}){
    const Myengineer = new Engineer(Name, Id, Contact, Github,)
    Employee_cards.push(generateEngineercard(Myengineer))
    if (Next_Steps === "Add another engineer"){
        Engineer_Prompt();
    }
    else if(Next_Steps === "Add an intern"){
        Intern_Prompt();
    }
    else(createFile());
};
function Add_intern({Name, Id, Contact, School, Next_Steps}){
    const MyIntern = new Intern(Name, Id, Contact, School);
    Employee_cards.push(generateInterncard(MyIntern))
        if (Next_Steps === "Add an engineer"){
            Engineer_Prompt();
        }
        else if(Next_Steps === "Add another intern"){
            Intern_Prompt();}
        else (createFile())
};     
function Engineer_Prompt(){
    inquirer
        .prompt([
        {
            type: 'input',
            name: 'Name',
            message: "What is the Engineer's name?",
          },
          {
            type: 'input',
            name: 'Id',
            message: "What is your Engineer's ID",
          },
          {
            type: 'input',
            name: 'Contact',
            message: "What is the Engineer's email adress",
          },
          {
            type: 'input',
            name: 'Github',
            message: "What is Engineer's Github username",
          },
          {
            type: "list",
            name: "Next_Steps",
            choices: ["Add another engineer", "Add an intern", "finish building my team"]
          }])
          .then((answers) => {
            Add_Engineer(answers)});
};
function Intern_Prompt(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'Name',
            message: "What is the Intern's name?",
          },
          {
            type: 'input',
            name: 'Id',
            message: "What is your Intern's ID",
          },
          {
            type: 'input',
            name: 'Contact',
            message: "What is the Intern's email adress",
          },
          {
            type: 'input',
            name: 'School',
            message: "What is Intern's school",
          },
          {
            type: "list",
            name: "Next_Steps",
            choices: ["Add an engineer", "Add another intern", "finish building my team"]
          }
       
        ])
        .then((answers) => {
            Add_intern(answers);});  
       
};
const generateManagercard = function (Mymanager) {
return `
<div class="card text-center">
        <div class="card-body bg-primary text-light">
            <h5 class="card-title"> ${Mymanager.getName()}</h5>
            <h6 class="card-subtitle"> <i class='fa fa-coffee'></i> ${Mymanager.getRole()}</h6>
        </div> 
        <ul class="list-group m-4">
        <li class="list-group-item"> ID: ${Mymanager.getId()}</li>
        <li class="list-group-item"> Email: <a href="mailto:${Mymanager.getEmail()}">${Mymanager.getEmail()}</a></li>
        <li class="list-group-item"> Office Number: ${Mymanager.getOfficeNumber()}</li>
    </ul>
</div>`}
const generateEngineercard = function (Myengineer) {
    return `
    <div class="card text-center">
            <div class="card-body bg-primary text-light">
                <h5 class="card-title"> ${Myengineer.getName()}</h5>
                <h6 class="card-subtitle"> <i class='fa fa-laptop'></i> ${Myengineer.getRole()}</h6>
            </div> 
            <ul class="list-group m-4">
            <li class="list-group-item"> ID: ${Myengineer.getId()}</li>
            <li class="list-group-item"> Email: <a href="mailto:${Myengineer.getEmail()}">${Myengineer.getEmail()}</a></li>
            <li class="list-group-item"> GitHub: <a href="https://github.com/${Myengineer.getGithub()}"> ${Myengineer.getGithub()} </a> </li>
        </ul>
    </div>`}
const generateInterncard = function (MyIntern) {
    return `
    <div class="card text-center">
            <div class="card-body bg-primary text-light">
                <h5 class="card-title"> ${MyIntern.getName()}</h5>
                <h6 class="card-subtitle"> <i class='fa fa-graduation-cap'></i> ${MyIntern.getRole()}</h6>
            </div> 
            <ul class="list-group m-4">
            <li class="list-group-item"> ID: ${MyIntern.getId()}</li>
            <li class="list-group-item"> Email: <a href="mailto:${MyIntern.getEmail()}">${MyIntern.getEmail()}</a></li>
            <li class="list-group-item"> School:${MyIntern.getSchool()} </a> </li>
        </ul>
    </div>`}
    

const generateMarkdown = (Employee_cards) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./style.css">
</head>
    <header>
    <nav class="navbar navbar-light bg-primary justify-content-center"> 
            <span class="h1 text-light">My Team</a>
    </nav>
</header>
<body>
<div class="card-deck m-3">
${Employee_cards.join('')}
    
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>
`
function createFile (){
inquirer
.prompt([
    {type: 'input',
    name: 'filename',
    message: 'What would you like your html file named?'}
])
.then((answers) => {fs.writeFile(`./Dist/${answers.filename}.html`, generateMarkdown(Employee_cards), (err) => err ? console.log(err) : console.log('created file'))
})}
module.exports ={Next}