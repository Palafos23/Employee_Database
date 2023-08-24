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
             //the if statement below uses user input to place a null or int(EX. 001) into the manager variable
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
          
function updateEmployeeRole(){
    const updateEmployeeRole = prompt[3];
        inquirer
            .prompt(updateEmployeeRole)

            .then((response) => {
              const sql = ` UPDATE employee 
                            SET role_id = '${response.updateRole}' 
                            WHERE first_name = '${response.firstName}' AND last_name = '${response.lastName}';`
          
          
            db.query(sql, (err, results) => {
              if(err) {
                console.log('\n updated employee');
              }else{
                viewEmployees();
              }
            })
          })
          }
function deleteRow(){
    const deleteRow = prompt[4];
        inquirer
            .prompt(deleteRow)
             .then((response) => {
              //can only delete from children to parent, not parent to children.
              //Ex. if the user wants to delete the HR Manager role, the employee with the role
              //HR Manager must be deleted and then the the actual role itself can be deleted 
              //because it not longer has a child to rely on it.
              const sql = `DELETE FROM ${response.tables} WHERE id = ${response.id};`
          
              console.log(`DELETE FROM ${response.tables} WHERE id = ${response.id};`)
            
            db.query(sql, (err, results) => {
            //uses an if statement with user inputed table to display matched table function.
              if(err){
                console.log(err)
              }else{
              console.log('\n deleted row');
              if(response.tables === 'department'){
                return viewDepartments();
              }else if (response.tables === 'role'){
                return viewRoles();
              }else{
                return viewEmployees();
              }
            }
            })
          })
          }  


module.exports = {viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole, deleteRow};