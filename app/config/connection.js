const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'YOUR_USERNAME',
  password : 'YOUR_PASSWORD',
  database : 'YOUR_DATABASE'
});

connection.connect();

module.exports = connection;
