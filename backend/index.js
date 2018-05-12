const express = require('express');
const app = express();

app.get("/", function(req, res) {
	res.send("Hello, World!");
})

app.get('/getAllStandorte', function(req, res) {
	res.send("Alle Standorte...");
})

app.get('/getAll', function(req, res) {
		res.send("All....");
})

app.listen(8081, function() {
	console.log("Example server listening...");
})

app.use(express.static('public'));

app.get('/user/:id', function(req, res) {
  res.send('user ' + req.params.id);
});
