const inquirer = require("inquirer");
const questions = require("./src/questions");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");
const generate = require("./src/generateHTML");
const page = require("./dist/roster.html");

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
  inquirer.prompt(questions.engineerQuestions).then((data) => {
    team.engineers.push(
      new Engineer(
        data.engineerName,
        data.engineerID,
        data.engineerEmail,
        data.engineerGithub
      )
    );
    chooseOption();
  });
}

function addIntern() {
  inquirer.prompt(questions.internQuestions).then((data) => {
    team.interns.push(
      new Intern(
        data.internName,
        data.internID,
        data.internEmail,
        data.internSchool
      )
    );
    chooseOption();
  });
}

function finishBuildingTeam() {
  writeToFile("./dist/roster.html");
}

function writeToFile(fileName) {
  fs.writeFile(fileName, generate.generateHTML(team), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

function addCard(member) {}

function chooseOption() {
  inquirer.prompt(questions.options).then((response) => {
    if (response.choice === "Add engineer") {
      addEngineer();
    } else if (response.choice === "Add intern") {
      addIntern();
    } else {
      finishBuildingTeam();
    }
  });
}

inquirer
  .prompt(questions.managerQuestions)
  .then((response) => addManager(response))
  .then(() => chooseOption());
