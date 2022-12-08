const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generatehtml');
const roster = [];

const createManager = () => {
    inquirer.prompt(
        [
            {
                type: 'input',
                message: `What is your team Manager's name?`,
                name: 'managerName',
                validate: managerInput => {
                    if (managerInput) {
                        return true;
                    } else {
                        console.log(`You must enter your team manager's name!`);
                    }
                }
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
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.officeNumber);
            roster.push(manager);
            chooseEmployee();
        })

}

const chooseEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', `I have no other team members`],
            name: 'choice'
        }
    ])
        // .then(response => {
        //     if (response.choice === 'Engineer') {
        //         createEngineer()
        //     } else if (response.choice === 'Intern') {
        //         createIntern()
        //     } else {
        //         return 'I have nothing more to add.'
        //     }
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
            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.github);
            roster.push(engineer);
            chooseEmployee();
        })
}

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
            const intern = new Intern(response.internName, response.internId, response.internEmail, response.school);
            roster.push(intern);
            chooseEmployee();
        })
}

function createTeam(response) {
    let htmlFile = generateHTML(response)
    fs.writeFile('index.html', htmlFile, (err) =>
        err ? console.error(err) : console.log('File created!')
    );
}

createManager()