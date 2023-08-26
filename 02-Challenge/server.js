const express = require('express');
const mysql = require('mysql2');
const choices = require('./js/index');
const PORT = process.env.PORT || 3001;
const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(choices)




