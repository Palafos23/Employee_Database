const inquirer = require('inquirer');
var prompt = inquirer.prompts;

prompt = [
    //addDepartment
      [{
        type: 'input',
        name: 'name',
        message: 'Enter Department name:',
      }],
    //addRole
      [{
        type: 'input',
        name: 'title',
        message: 'Enter position title:',
      },
      {
        type: 'input',
        name: 'salary',
        message: 'Enter salary:'
      },
      {
        type: 'input',
        name: 'department',
        message: 'Enter departmentid:'
      }],

    //addEmployee
      [{
        type: 'input',
        name: 'firstName',
        message: 'Enter first name:',
      },
      {
        type: 'input',
        name: 'lastName',
        message: 'Enter last name:'
      },
      {
        type: 'input',
        name: 'roleID',
        message: 'Enter roleid:'
      },
      {
        type: 'input',
        name: 'manager',
        message: 'Enter Managerid:',
      }],

    //updateEmployeeRole
      [{
        type: 'input',
        name: 'firstName',
        message: 'Enter first name'
      },
      {
        type: 'input',
        name: 'lastName',
        message: 'Enter last name'
      },
      {
        type: 'input',
        name: 'updateRole',
        message: 'Enter updated roleid:'
      }],

    //deleteRow  
      [{
        type: 'list',
        name: 'tables',
        message: 'Choose a Table:',
        choices: ['department', 'role', 'employee']
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter id:'
      }
    ]
]

    module.exports = prompt;
    


  
    