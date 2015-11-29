const mysql = require('mysql');

const pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'hammer_test'
});

module.exports = pool;
