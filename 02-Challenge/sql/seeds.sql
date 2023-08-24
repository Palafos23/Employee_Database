INSERT INTO department (id, name)
VALUES (001, " Marketing"),
       (002, "Accounting"),
       (003, "Sales"),
       (004, "Human Resources");

INSERT INTO role (id, title, salary, department_id)
VALUES(001, "marketing manager", 1000, 001),
      (002, "marketing assistant", 2000, 001),
      (003, "Accounting Manager", 1000, 002),
      (004, "Senior Accountant", 3000, 002),
      (005, "Accountant", 2000, 002),
      (006, "Sales Manager", 3500, 003),
      (007, "Sales Associate", 1500, 003),
      (008, "HR Manager", 3500, 004);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES(001, "Deisy", "Martinez", 001, null),
      (002, "Joseph", "Palafos", 002, 001),
      (003, "Aaron", "Rodgers", 003, null),
      (004, "Mark", "Sanchez", 005, 003),
      (005, "Kyler", "Murray", 006, null);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

