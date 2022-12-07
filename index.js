const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generatehtml');

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
                name: 'office'
            }
        ])
        .then(response => )
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
            name: 'engineerGithub'
        }
    ])
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
            name: 'interEmail'
        },
        {
            type: 'input',
            message: `What is your intern's school?`,
            name: 'internSchool'
        }
    ])
} 