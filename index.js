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

function addManager(response) {
  team.manager = new Manager(
    response.managerName,
    response.managerID,
    response.managerEmail,
    response.managerOfficeNumber
  );
}

function addEngineer() {
  return inquirer.prompt(questions.engineerQuestions).then((data) => {
    team.engineers.push(
      new Engineer(
        data.engineerName,
        data.engineerID,
        data.engineerEmail,
        data.engineerGithub
      )
    );
  });
}

function addIntern() {
  return inquirer.prompt(questions.internQuestions).then((data) => {
    team.interns.push(
      new Intern(
        data.internName,
        data.internID,
        data.internEmail,
        data.internSchool
      )
    );
  });
}

function buildTeam() {
  inquirer
    .prompt(questions.managerQuestions)
    .then((response) => addManager(response))
    .then(() => inquirer.prompt(questions.options))
    .then((response) => {
      if (response.choice === "Add engineer") {
        return addEngineer();
      } else if (response.choice === "Add intern") {
        return addIntern();
      } else {
        return;
      }
    })
    .then(() => console.log(team));
}

buildTeam();
