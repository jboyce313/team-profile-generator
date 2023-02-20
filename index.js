const inquirer = require("inquirer");
const questions = require("./src/questions");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const team = {
  engineers: [],
  interns: [],
};

function addTeamMembers() {
  let finished = false;
  while (!finished) {
    inquirer.prompt(questions.options).then((response) => {
      switch (response.choice) {
        case "Add engineer":
          inquirer.prompt(questions.engineerQuestions).then((data) => {
            team.engineers.push(
              new Engineer(
                data.engineerName,
                data.engineerID,
                data.engineerEmail,
                data.engineerGithub
              )
            );
          });
          break;
        case "Add intern":
          inquirer.prompt(questions.internQuestions).then((data) => {
            team.interns.push(
              new Intern(
                data.internName,
                data.internID,
                data.internEmail,
                data.internSchool
              )
            );
          });
          break;
        case "Finish building team":
          finished = true;
          break;
      }
    });
  }
}

function buildTeam() {
  inquirer.prompt(questions.managerQuestions).then((response) => {
    team.manager = new Manager(
      response.managerName,
      response.managerID,
      response.managerEmail,
      response.managerOfficeNumber
    );
    addTeamMembers();
    console.log(team);
  });
}

buildTeam();
