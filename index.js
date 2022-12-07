const inquirer = require('inquirer');

const createManager = [
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
        name: 'office'
    }
]

function init() {
    inquirer
        .prompt(createManager)
}

init();