const express = require('express');
const app = express();

app.get("/", function(req, res) {
	res.send("Hello, World!");
})

app.get('/getAllStandorte', function(req, res) {
	res.send("Alle Standorte...");
})

app.get('/getAll', function(req, res) {
	console.log(req);
	res.send("Alle Standorte...");
})

app.listen(8081, function() {
	console.log("Example server listening...");
})