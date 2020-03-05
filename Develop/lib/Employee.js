// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
     
    printInfo() {
        console.log(`this employee ${this.name}is.`)
        console.log(`this employee ${this.id}is.`)
        console.log(`this employee ${this.email}is.`)

    }
    getName() {
         return this.name;
    }
    getEmail() {
       return this.email;
    }
    getId() {
        return this.id;
     }
    getRole() {
        return "Employee";
    }
}
   //const employee= new Employee("Kim",0O2,"kim@fakemail.com")
   //console.log(employee)
module.exports = Employee;