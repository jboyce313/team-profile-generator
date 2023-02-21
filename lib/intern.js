const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, employeeID, email, school) {
    super(name, employeeID, email);
    this.school = school;
    const getSchool = () => this.school;
    let getRole = () => "Intern";
  }
}

module.exports = Intern;
