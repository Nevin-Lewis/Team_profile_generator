const Employee = require('../lib/Employee');

describe("Employee", () => {
    // Test for all use cases when initializing a new Child object
    describe("Initialization", () => {
      it("should create an object with a name, Id and email of the Employee", () => {
        const Employee1 = new Employee("Nikki", 789, 'Test@test.com');
  
        // Verify that the new object has the correct properties
        expect(Employee1.getName()).toEqual("Nikki");
        expect(Employee1.getId()).toEqual(789);
        expect(Employee1.getEmail()).toEqual('Test@test.com');
        expect(Employee1.getRole()).toEqual('Employee')
      });

    })})

    describe("Employee", () => {
        // Test for all use cases when initializing a new Child object
        describe("Initialization", () => {
          it("Getting the role should return Employee", () => {
            const Employee1 = new Employee();
      
            // Verify that the new object has the correct properties
            expect(Employee1.getRole()).toEqual('Employee')
          });})});