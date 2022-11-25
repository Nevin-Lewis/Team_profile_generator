const Employee= require("./Employee.js");

class Manager extends Employee {
    constructor(Name, Id, Email, Office_number) {
    super(Name, Id, Email);
    this.Office_number = Office_number;
    }

getOfficeNumber()
    {return this.Office_number};
getRole()
    {return "Manager"};
  };
    module.exports = Manager;