const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, employeeID, email, githubUsername) {
    super(name, employeeID, email);
    this.githubUsername = githubUsername;
  }
}

module.exports = Engineer;
