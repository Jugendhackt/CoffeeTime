const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysqlPool = require('./mysql.js');

// Use body-parser to handle post requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", function(req, res) {
	res.send("Hello, World!");
})
app.get('/:id/getAllBewertungen', function(req, res) {
	mysqlPool.query('SELECT id, kommentar, qualitaet FROM Automat WHERE heissgetraenkid='+ mysqlPool.escape(req.params.id) +';',
		function (error, results, fields) {
			if (error) {
				console.log(error);
			}
			var arr = [];
			for (entry in results) {
				arr.push({
					id: results[entry].id,
					kommentar: results[entry].kommentar,
					qualitaet: results[entry].qualitaet,
				});
			}
			res.send(JSON.stringify(arr));
		});
})

app.get('/getAllStandorte', function(req, res) {
	res.send("Alle Standorte...");
})

app.get('/getAll', function(req, res) {
	mysqlPool.query('SELECT id as S_ID, name, standortlg, standortbg, (SELECT AVG(qualitaet) FROM Automat, Bewertung, Heissgetraenke WHERE Bewertung.heissgetreankid = Heissgetraenke.id AND Heissgetraenke.automatid = Automat.id AND Automat.id=S_ID) as quality FROM Automat',
		function (error, results, fields) {
			if (error) {
				console.log(error);
			}
			var arr = [];
			for (entry in results) {
				arr.push({
					id: results[entry].S_ID,
					name: results[entry].name,
					long: results[entry].standortlg,
					lat: results[entry].standortbg,
					quality: results[entry].quality,

				});
			}
			res.send(JSON.stringify(arr));
		});
})

app.get('/automat/:id', function(req, res) {
  mysqlPool.query('SELECT name, preis, art FROM Heissgetraenke WHERE automatid = ' +  mysqlPool.escape(req.params.id),
  function (error, results, fields) {
    if (error) {
      console.log(error);
    }
    var arr = [];
    for (entry in results) {
      arr.push({
        name: results[entry].name,
        preis: results[entry].preis,
        art: results[entry].art,
      });
    }
    res.send(JSON.stringify(arr));
  })
});

app.post('/addAutomat', function(req, res) {
	console.log(req);
	var name = mysqlPool.escape(req.body.name);
	var long = mysqlPool.escape(req.body.long);
	var lat = mysqlPool.escape(req.body.lat);
	var oeffnungszeit = mysqlPool.escape(req.body.opens);

	var query = "INSERT INTO Automat(name, art, oeffnungszeit, standortlg, standortbg) VALUES ("
		+ name + ", 0," + oeffnungszeit + "," + long + "," + lat + ");"
		mysqlPool.query(query, function(err, results, fields) {
			if (err) {
				res.send(500);
			} else {
				res.send(200);
			}
		})
});

app.get("/timestamp", function(req, res){
	res.send(JSON.stringify(Date.now()));
})

app.listen(8081, function() {
	console.log("Example server listening...");
})

app.use(express.static('public'));

app.get('/user/:id', function(req, res) {
  res.send('user ' + req.params.id);
});
