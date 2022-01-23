// node modules

const fs = require('fs');
const inquirer = require('inquirer');


const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
        },
    ])
}