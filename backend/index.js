const express = require('express');
const app = express();
const mysqlPool = require('./mysql.js');


app.get("/", function(req, res) {
	res.send("Hello, World!");
})

app.get('/getAllStandorte', function(req, res) {
	res.send("Alle Standorte...");
})

app.get('/getAll', function(req, res) {
	mysqlPool.query('SELECT id, name, standortlg, standortbg FROM Automat;',
		function (error, results, fields) {
			if (error) {
				console.log(error);
			}
			var arr = [];
			for (entry in results) {
				arr.push({
					id: results[entry].id,
					name: results[entry].name,
					long: results[entry].standortlg,
					lat: results[entry].standortbg,
					
				});
			}
			res.send(JSON.stringify(arr));
		});
})

app.listen(8081, function() {
	console.log("Example server listening...");
})

app.use(express.static('public'));

app.get('/user/:id', function(req, res) {
  res.send('user ' + req.params.id);
});
