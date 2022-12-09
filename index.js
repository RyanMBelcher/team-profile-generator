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
                message: `What is your team manager's name?`,
                name: 'managerName',
                validate: managerNameInput => {
                    if (typeof managerNameInput != 'string' || !managerNameInput.trim().length) {
                        throw new Error(`Please enter your manager's name!`);
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'number',
                message: `What is your team manager's ID number?`,
                name: 'managerId',
                validate: managerIdInput => {
                    if (typeof managerIdInput !== 'number' || isNaN(managerIdInput) || managerIdInput < 0) {
                        throw new Error('Please enter a valid ID number!')
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                message: `What is your team manager's email address?`,
                name: 'managerEmail',
                validate: managerEmailInput => {
                    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
                    const isValid = managerEmailInput.match(regex);
                    if (isValid) {
                        return true;
                    } else {
                        throw new Error('Please enter a valid email address!')
                    }
                }
            },
            {
                type: 'number',
                message: `What is your team manager's office number?`,
                name: 'officeNumber',
                validate: officeNumberInput => {
                    if (typeof officeNumberInput !== 'number' || isNaN(officeNumberInput) || officeNumberInput < 0) {
                        throw new Error('Please enter a valid office number!')
                    } else {
                        return true;
                    }
                }
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
            name: 'engineerName',
            validate: engineerNameInput => {
                if (typeof engineerNameInput != 'string' || !engineerNameInput.trim().length) {
                    throw new Error(`Please enter your engineer's name!`);
                } else {
                    return true;
                }
            }
        },
        {
            type: 'number',
            message: `What is your engineer's ID number?`,
            name: 'engineerId',
            validate: engineerIdInput => {
                if (typeof engineerIdInput !== 'number' || isNaN(engineerIdInput) || engineerIdInput < 0) {
                    throw new Error('Please enter a valid ID number!')
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: `What is your engineer's email address?`,
            name: 'engineerEmail',
            validate: engineerEmailInput => {
                const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
                const isValid = engineerEmailInput.match(regex);
                if (isValid) {
                    return true;
                } else {
                    throw new Error('Please enter a valid email address!')
                }
            }
        },
        {
            type: 'input',
            message: `What is your engineer's GitHub username?`,
            name: 'github',
            validate: githubInput => {
                if (typeof githubInput != 'string' || !githubInput.trim().length) {
                    throw new Error(`Please enter your GitHub username!`);
                } else {
                    return true;
                }
            }
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
            name: 'internName',
            validate: internNameInput => {
                if (typeof internNameInput != 'string' || !internNameInput.trim().length) {
                    throw new Error(`Please enter your intern's name!`);
                } else {
                    return true;
                }
            }
        },
        {
            type: 'number',
            message: `What is your intern's ID number?`,
            name: 'internId',
            validate: internIdInput => {
                if (typeof internIdInput !== 'number' || isNaN(internIdInput) || internIdInput < 0) {
                    throw new Error('Please enter a valid ID number!')
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: `What is your intern's email address?`,
            name: 'internEmail',
            validate: internEmailInput => {
                const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
                const isValid = internEmailInput.match(regex);
                if (isValid) {
                    return true;
                } else {
                    throw new Error('Please enter a valid email address!')
                }
            }
        },
        {
            type: 'input',
            message: `What is your intern's school?`,
            name: 'school',
            validate: schoolInput => {
                if (typeof schoolInput !== 'string' || !schoolInput.trim().length) {
                    throw new Error(`Please enter your intern's school!`)
                } else {
                    return true;
                }
            }
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
    fs.writeFile('./dist/index.html', htmlFile, (err) =>
        err ? console.error(err) : console.log('File created!')
    );
}

// This is the invoking of the first function
createManager()