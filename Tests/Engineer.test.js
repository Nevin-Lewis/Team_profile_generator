const Engineer = require('../lib/Engineer');


describe("Engineer", () => {
    // Test for all use cases when initializing a new Child object
    describe("Initialization", () => {
      it("should create an object with a name, Id, email, and Github of the Engineer", () => {
        const Engineer1 = new Engineer("Nikki", 789, 'Test@test.com', "nevin-lewis");
  
        // Verify that the new object has the correct properties
        expect(Engineer1.getName()).toEqual("Nikki");
        expect(Engineer1.getId()).toEqual(789);
        expect(Engineer1.getEmail()).toEqual('Test@test.com');
        expect(Engineer1.getGithub()).toEqual('nevin-lewis');
      });

    })})

    describe("Intern", () => {
        // Test for all use cases when initializing a new Child object
        describe("Initialization", () => {
          it("Getting the role should return Engineer", () => {
            const Engineer1 = new Engineer();
      
            // Verify that the new object has the correct properties
            expect(Engineer1.getRole()).toEqual('Engineer')
          });})});