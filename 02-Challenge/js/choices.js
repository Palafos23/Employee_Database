const inquirer = require('inquirer');
const choices = require('./index');
const db = require('../server');
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
    
function addDepartment(){
    const addDepartment = prompt[0];
        
        inquirer
          .prompt(addDepartment)
      
          .then((response) => {
            const sql = `INSERT INTO department(name) VALUES ('${response.name}');`
         
          db.query(sql, (err, results) => {
            if(err){
            console.log('\n Added Department');
            }else{
            viewDepartments();
            console.log(results)
            }
          }
          )}
          )
        }
        
function addRole(){
    const addRole = prompt[1];
          inquirer
          .prompt(addRole)
      
          .then((response) => {
            const sql = `INSERT INTO role(title, salary, department_id) VALUES ('${response.title}', '${response.salary}', '${response.department}');`
         
          db.query(sql, (err, results) => {
            if(err){
              console.log('\n Added Roles');
            }else{
            viewRoles();
            console.log(results)
            }
          }
          )}
          )
        }

function addEmployee(){
    const addEmployee = prompt[2];
            inquirer
            .prompt(addEmployee)

            .then((response) => {
             
                if(response.manager === null) {
                  var manager = null;
                }else{
                  var manager = response.manager;
                }
              console.log(`${response.manager}`);

              const sql = `INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES 
              ('${response.firstName}', '${response.lastName}', ${response.roleID}, ${manager});`
           
            db.query(sql, (err, results) => {
              if(err) {
                console.log('\n Added Employee');
              }else{
              viewEmployees();
              console.log(results)
              }
            }
            )}
            )
          }  
  


module.exports = {viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee};