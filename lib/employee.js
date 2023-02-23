class Employee {
  constructor(name, employeeID, email) {
    this.name = name;
    this.employeeID = employeeID;
    this.email = email;
    const getName = () => this.name;
    const getID = () => this.employeeID;
    const getEmail = () => this.email;
    let getRole = () => "Employee";
  }
}

module.exports = Employee;
