// node modules

const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

teamArray = [];


const addManager = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'startConfirm',
            message: 'Would you like to build a team profile?',
            validate: startConfirmInput => {
                if (startConfirmInput === 'N' || 'n') {
                    process.exit();
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of the team?',
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID number.",
            validate: managerIdInput => {
                if (isNaN(managerIdInput)) {
                    console.log('Please enter an office number!')
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's e-mail",
            validate: managerEmail => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(managerEmail)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'phone',
            message: "Please enter the manager's office phone number",
            validate: phoneInput => {
                if (isNaN(phoneInput)) {
                    console.log('Please enter an office phone number')
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const { name, id, email, phone} = managerInput;
        const newManager = new Manager (name, id, email, phone);

        teamArray.push(newManager);
        console.log(newManager);
    })

}

const addEmployees = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'Please choose which type of employee you would like to add.',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID number?",
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log('Please enter an office number!')
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email address?",
            validate: employeeEmail => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(employeeEmail)
                    if (valid) {
                        return true;
                    } else {
                        console.log ('Please enter an email!')
                        return false;
                    }
                }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the employee's Github Username?",
            when: (input) => input.role === 'Engineer',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's github username!");
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Where does the intern attend school?',
            when: (input) => input.role === 'Intern',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: true,    
        }
    ])
    .then(employeeAnswers => {
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeAnswers;
        let employee;

        if (role === 'Engineer') {
            employee = new Engineer (name, id, email, github);

            console.log(employee);
        } else if (role === 'Intern') {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }

        teamArray.push(employee);

        if(confirmAddEmployee) {
            return addEmployees(teamArray);
        } else {
            return teamArray;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your team profile has been created!')
        }
    })
}



addManager()
.then(addEmployees)
.then(teamArray => {
    return generateHTML(teamArray);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err);
});
