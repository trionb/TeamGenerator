const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let team = []
const managerQuestion = [
    {
        type: "input",
        name: "name",
        message: "Who is the Manager?"
    },
    {
        type: "input",
        name: "emailInfo",
        message: "email info"
    },
    {
        type: "input",
        name: "ID",
        message: "user Id info"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "office Number"
    },
];
//create engineer questions
const engineerQuestion = [
    {
        type: "input",
        name: "name",
        message: "What is the Engineer's name?"
    },
    {
        type: "input",
        name: "emailInfo",
        message: "Engineer's email info"
    },
    {
        type: "input",
        name: "ID",
        message: "Engineer's Id info"
    },
    {
        type: "input",
        name: "GitHub",
        message: "Engineer's github username?"
    },
]
//create intern questions
const internQuestion = [
    {
        type: "input",
        name: "name",
        message: "What is the Intern's name?"
    },
    {
        type: "input",
        name: "emailInfo",
        message: "Intern's email info"
    },
    {
        type: "input",
        name: "ID",
        message: "Intern's Id info"
    },
    {
        type: "input",
        name: "school",
        message: "School Name?"
    },
]
function makeEmployee() {
    inquirer.prompt([{
        type: "list",
        name: "employeeType",
        message: "Who would you like to add",
        choices: ["Engineer",
            "Intern",
            "Manager",
            "No more employees to add."]
    }]).then(function (memberAnswers) {
        switch (memberAnswers.employeeType) {
            case "Manager":
                makeManager();
                break;
            case "Engineer":
                makeEngineer();
                break;
            case "Intern":
                makeIntern();
                break;
            case "No more employees to add.":
                endQuestion();
                break;
            default:
                makeEmployee();
                break;
        }
    });
};
function makeManager() {
    inquirer.prompt(managerQuestion)
        .then(function (managerAnswers) {
            const manager = new Manager(managerAnswers.name, managerAnswers.ID, managerAnswers.emailInfo, managerAnswers.officeNumber)
            team.push(manager)
            makeEmployee();

        }
        )
};
function makeEngineer() {
    inquirer.prompt(engineerQuestion)
        .then(function (engineerAnswers) {
            const engineer = new Engineer(engineerAnswers.name, engineerAnswers.ID, engineerAnswers.emailInfo, engineerAnswers.GitHub)
            team.push(engineer)
            makeEmployee();

        }
        )
};
function makeIntern() {
    inquirer.prompt(internQuestion)
        .then(function (internAnswers) {
            const intern = new Intern(internAnswers.name, internAnswers.ID, internAnswers.emailInfo, internAnswers.school)
            team.push(intern)
            makeEmployee();

        }
        )
};
function endQuestion() {

    console.log("Great team you got!")
    fs.writeFileSync(outputPath, render(team), "utf-8")
};


makeEmployee();


// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
