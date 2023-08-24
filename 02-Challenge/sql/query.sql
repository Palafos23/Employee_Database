-- viewDepartments
SELECT department.id 
AS ID, department.name 
AS Departments 
FROM department

-- viewRoles
SELECT role.title 
AS Role, role.id 
AS RoleID, role.salary 
AS Salary, department.name 
AS Department 
FROM role JOIN department ON role.department_id = department.id;

-- viewEmployees
SELECT 
employee.id 
AS ID, employee.first_name
AS FIrstName, employee.last_name 
AS LastName, department.name 
AS Department, role.title 
AS Role, role.salary 
AS Salary, employee.manager_id 
AS ManagerID 
FROM employee 
JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY role_id;

--addDepartment
INSERT INTO department(name) VALUES ('name');

--addRole
INSERT INTO role(title, salary, department_id) 
VALUES ('title', 'salary', '002');

--addEmployee
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES 
    ('name', 'name', 001, null);

--updateEmployeeRole
UPDATE employee 
SET role_id = '001' 
WHERE first_name = 'name' AND last_name = 'name';

--deleteRow
DELETE FROM employee WHERE id = 001;