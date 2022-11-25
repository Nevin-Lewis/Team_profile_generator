const Intern = require('../lib/Intern');

describe("Intern", () => {
    // Test for all use cases when initializing a new Child object
    describe("Initialization", () => {
      it("should create an object with a name, Id and email of the Intern", () => {
        const Intern1 = new Intern("Nikki", 789, 'Test@test.com', "University of Texas");
  
        // Verify that the new object has the correct properties
        expect(Intern1.getName()).toEqual("Nikki");
        expect(Intern1.getId()).toEqual(789);
        expect(Intern1.getEmail()).toEqual('Test@test.com');
        expect(Intern1.getSchool()).toEqual('University of Texas');
      });

    })})

    describe("Intern", () => {
        // Test for all use cases when initializing a new Child object
        describe("Initialization", () => {
          it("Getting the role should return Intern", () => {
            const Intern1 = new Intern();
      
            // Verify that the new object has the correct properties
            expect(Intern1.getRole()).toEqual('Intern')
          });})});