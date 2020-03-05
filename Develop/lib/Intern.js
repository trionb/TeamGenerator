// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    printInfo() {
    
        console.log(`Intern ${this.school}is`);
    }
    // getName() {
         
    //     return this.name;
    // }
    // getId() {
         
    //     return this.id;
    // }
    // getEmail() {
    //     return this.email;
    // }
    
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

//const intern = new Intern("tim", 0O3,"tim@fake.com","NYU");
//console.log(intern)
module.exports=Intern;