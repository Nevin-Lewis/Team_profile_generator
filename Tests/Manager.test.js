const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');


describe("Manager", () => {
    // Test for all use cases when initializing a new Child object
    describe("Initialization", () => {
      it("should create an object with a name, Id, email, and Room number of the Manager", () => {
        const Manager1 = new Manager("Nikki", 789, 'Test@test.com', 712);
  
        // Verify that the new object has the correct properties
        expect(Manager1.getName()).toEqual("Nikki");
        expect(Manager1.getId()).toEqual(789);
        expect(Manager1.getEmail()).toEqual('Test@test.com');
        expect(Manager1.getOfficeNumber()).toEqual(712);
      });

    })})

    describe("Manager", () => {
        // Test for all use cases when initializing a new Child object
        describe("Initialization", () => {
          it("Getting the role should return Manager", () => {
            const Manager1 = new Manager();
      
            // Verify that the new object has the correct properties
            expect(Manager1.getRole()).toEqual('Manager')
          });})});