const mysql = require('mysql');

const pool = mysql.createPool({
	host	: 	'localhost',
	user	: 	'coffeetime',
	password: 	'Pa$$w0rd', 
	database: 	'CoffeeTime'
})

module.exports = pool;
