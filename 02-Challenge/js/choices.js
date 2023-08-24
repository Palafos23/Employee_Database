const inquirer = require('inquirer');
const choices = require('./index');
const {db} = require('../server');
const prompt = require('./questions');


function viewDepartments(){
 const sql = `SELECT department.id AS ID, department.name AS Departments FROM department`;
      
 db.query(sql, (err, results) => {
    if(err){
        console.log(err)
    }else{     
    console.table(results);
    }
 })
};

function viewRoles(){
    const sql = `SELECT role.title AS Role, role.id AS RoleID, role.salary AS Salary, department.name AS Department FROM role JOIN department ON role.department_id = department.id;`;
  
    db.query(sql, (err, results) => {
        if(err){
            console.log(err)
        }else{     
        console.table(results);
        }
        
    })
  }
  
function viewEmployees(){
    const sql = `SELECT employee.id AS ID, employee.first_name AS FIrstName, employee.last_name AS LastName, department.name AS Department, role.title AS Role, role.salary AS Salary, employee.manager_id AS ManagerID FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY role_id;`;
  
    db.query(sql, (err, results) => {
          
        if(err){
            console.log(err)
        }else{     
        console.table(results);
        }
        
      })
  }
  


module.exports = {viewDepartments, viewRoles, viewEmployees};