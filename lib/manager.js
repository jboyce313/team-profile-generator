const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, employeeID, email, officeNumber) {
    super(name, employeeID, email);
    this.officeNumber = officeNumber;
    let getRole = () => "Manager";
  }
}

module.exports = Manager;
