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
