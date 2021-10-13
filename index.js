const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        message: 'Employee Name',
        name: 'employeeName',
    },
    {
        type: 'input',
        message: 'Employee Email',
        name: 'employeeEmail',
    },
    {
        type: 'input',
        message: 'Employee GitHub',
        name: 'employeeGitHub',
    }

])

.then((responses)=>{
    console.log(responses);
})