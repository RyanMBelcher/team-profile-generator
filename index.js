const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generatehtml');
let manager = null;
const engineer = [];
const intern = [];

// Prompts users for manger information and stores that information on the manager variable
const createManager = () => {
    inquirer.prompt(
        [
            {
                type: 'input',
                message: `What is your team Manager's name?`,
                name: 'managerName',
            },
            {
                type: 'number',
                message: `What is your team manager's ID number?`,
                name: 'managerId'
            },
            {
                type: 'input',
                message: `What is your team manager's email address?`,
                name: 'managerEmail'
            },
            {
                type: 'number',
                message: `What is your team manager's office number?`,
                name: 'officeNumber'
            }
        ])
        .then(response => {
            const newManager = new Manager(response.managerName, response.managerId, response.managerEmail, response.officeNumber);
            manager = newManager;
            chooseEmployee();
        })

}

// Give the user the ability to choose between an engineer, an intern, or no other team members. If they choose 
// engineer the create engineer function is invoked, if they choose intern the create intern function is invoked,
// if they choose neither, the create team function is invoked.
const chooseEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', `I have no other team members`],
            name: 'choice'
        }
    ])
        .then(response => {
            switch (response.choice) {
                case 'Engineer':
                    createEngineer();
                    break;
                case 'Intern':
                    createIntern();
                    break;
                case 'I have no other team members':
                    createTeam();
                // something will go here
            };

        })
}

// Prompts the user for engineer information and stores it to the engineer array
const createEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: `What is your engineer's name?`,
            name: 'engineerName'
        },
        {
            type: 'number',
            message: `What is your engineer's ID number?`,
            name: 'engineerId'
        },
        {
            type: 'input',
            message: `What is your engineer's email address?`,
            name: 'engineerEmail'
        },
        {
            type: 'input',
            message: `What is your engineer's GitHub?`,
            name: 'github'
        }
    ])
        .then(response => {
            const newEngineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.github);
            engineer.push(newEngineer);
            chooseEmployee();
        })
}

// Prompts the user for engineer information and stores it to the intern array
const createIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: `What is your intern's name?`,
            name: 'internName'
        },
        {
            type: 'number',
            message: `What is your intern's ID number?`,
            name: 'internId'
        },
        {
            type: 'input',
            message: `What is your intern's email address?`,
            name: 'internEmail'
        },
        {
            type: 'input',
            message: `What is your intern's school?`,
            name: 'school'
        }
    ])
        .then(response => {
            const newIntern = new Intern(response.internName, response.internId, response.internEmail, response.school);
            intern.push(newIntern);
            chooseEmployee();
        })
}

// Creates the team and generates the html page with the information
const createTeam = () => {
    let htmlFile = generateHTML(manager, engineer, intern)
    fs.writeFile('index.html', htmlFile, (err) =>
        err ? console.error(err) : console.log('File created!')
    );
}

// This is the invoking of the first function
createManager()