const inquirer = require("inquirer");

const managerQuestions = [
  {
    type: "input",
    message: `Enter team manager's name:`,
    name: "managerName",
  },
  {
    type: "input",
    message: `Enter team manager's employee ID:`,
    name: "managerID",
  },
  {
    type: "input",
    message: `Enter team manager's email address:`,
    name: "managerEmail",
  },
  {
    type: "input",
    message: `Enter team manager's office number:`,
    name: "managerOfficeNumber",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: `Enter engineer's name:`,
    name: "engineerName",
  },
  {
    type: "input",
    message: `Enter engineer's employee ID:`,
    name: "engineerID",
  },
  {
    type: "input",
    message: `Enter engineer's email address:`,
    name: "engineerEmail",
  },
  {
    type: "input",
    message: `Enter engineer's github username:`,
    name: "engineerGithub",
  },
];

const internQuestions = [
  {
    type: "input",
    message: `Enter intern's name:`,
    name: "internName",
  },
  {
    type: "input",
    message: `Enter intern's ID:`,
    name: "internID",
  },
  {
    type: "input",
    message: `Enter intern's email address:`,
    name: "internEmail",
  },
  {
    type: "input",
    message: `Enter intern's school name:`,
    name: "internSchool",
  },
];
