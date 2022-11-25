const Employee = require("./Employee.js");

class Intern extends Employee{
    constructor(Name, Id, Email, School) {
    super(Name, Id, Email);
    this.School = School;
  }
  getSchool()
    {return this.School};
  getRole()
    {return "Intern"};
};
  module.exports = Intern;