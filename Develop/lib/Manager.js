// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./employee")
class Manager extends  Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }
    printInfo() {
       
        console.log(`Manager ${this.officeNumber}is`);
    }
    getName() {
         
        return this.name;
    }
    getId() {
         
        return this.id;
    }
    getOfficeNumber() {
         return this.officeNumber;
    }
    
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Manager";
    }
}

//const manager = new Manager("john", 0O1,"johndoe@fake.com", 2)
//console.log(manager)
module.exports=Manager;