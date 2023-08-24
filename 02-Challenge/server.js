const express = require('express');
const mysql = require('mysql2');
const choices = require('./js/index');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(choices)


// const db = mysql.createConnection(
//     {
//       host: 'localhost',
//       user: 'root',
//       password:  'Monkey23',
//       database: 'employee_db'
//     },
//     console.log(`Connected to the employee_db database.`)
//   );

// module.exports = db;