// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./employee")

class Engineer extends Employee {

    constructor(name, id, email,GitHub,) {
        super(name, id, email);
        this.github = GitHub;
        //this.gitHubUsername = ghUsername;
    }
    printInfo() {
        console.log(`Engineer ${this.GitHub}is`);
    }          
    getName() {
      return this.name;
    }
    getId() {
         
        return this.id;
    }
    getEmail(){
     return this.email;
    }
    getGithub() { 
        return this.github;
    }
    // getGitHUb() {
    //     return this.ghAccount;
    // }
    // getGitHubUser() {
    //     return this.ghUsername;
    // }
    getRole() {
        return "Engineer";
    }
}

  //const engineer = new Engineer(`mark`, 0O1, `markdoe@fake.com`,`markdoe`, `mkdoe`);
//   expect(engineer.getGithub()).toEqual(`${this.gitHub}`);
  //console.log(engineer)
  module.exports=Engineer;