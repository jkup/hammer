const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'WAoR8zP3mTGKv474',
  database : 'nodecasts'
});

connection.connect();

module.exports = connection;
