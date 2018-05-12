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

app.get('/getAllStandorte', function(req, res) {
  res.send("Alle Standorte...");
})

app.get('/sortByRating', function (req, res){
  mysqlPool.query( 'SELECT id as S_ID, name, standortlg, standortbg, (SELECT AVG(qualitaet) FROM Automat, Bewertung, Heissgetraenke WHERE Bewertung.heissgetreankid = Heissgetraenke.id AND Heissgetraenke.automatid = Automat.id AND Automat.id=S_ID) as quality FROM Automat ORDER BY quality DESC',
    function (error, results, fields) {
      console.log(error);

    //start
    var arr = [];
    for (entry in results) {
      arr.push({
        name: results[entry].name,
        long: results[entry].standortlg,
        lat: results[entry].standortbg,
        quality: results[entry].quality,

      });
    }

    res.send(JSON.stringify(arr));
    //ende

})
});


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

app.get('/:id/getAllBewertungen', function(req, res) {
  mysqlPool.query('SELECT id, kommentar, qualitaet FROM Bewertung WHERE heissgetreankid='+ mysqlPool.escape(req.params.id) +';',
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

app.get('/:id/getRating', function(req, res) {
  mysqlPool.query('SELECT avg(qualitaet) as qualitaet FROM Bewertung WHERE heissgetreankid='+ mysqlPool.escape(req.params.id) +';',
  function (error, results, fields) {
    if (error) {
      console.log(error);
    }
    res.send(JSON.stringify(results));
  });
})

app.post('/:id/addRating', function(req, res) {
  console.log(req);
  var kommentar = mysqlPool.escape(req.body.comment);
  var qualitaet = mysqlPool.escape(req.body.quality);

  var query = "INSERT INTO Bewertung(kommentar, qualitaet, heissgetreankid) VALUES ("
  + kommentar + ", " + qualitaet + "," + mysqlPool.escape(req.params.id) + ");"
  mysqlPool.query(query, function(err, results, fields) {
    if (err) {
      res.send(500);
    } else {
      res.send(200);
    }
  })
});

app.get('/:id/getHeisseGetreanke', function(req, res) {
  mysqlPool.query('SELECT * FROM Heissgetraenke WHERE automatid = '+ mysqlPool.escape(req.params.id) +';',
  function (error, results, fields) {
    if (error) {
      console.log(error);
    }
    res.send(JSON.stringify(results));
  });
})

app.post('/:id/addHeisseGetreanke', function(req, res) {
  var name = mysqlPool.escape(req.body.name);
  var preis = mysqlPool.escape(req.body.price);
  var art = mysqlPool.escape(req.body.type);

  var query = "INSERT INTO Heissgetraenke(name, preis, art,heissgetreankid) VALUES ("
  + name + ", " + preis + "," + art + "," + mysqlPool.escape(req.params.id) + ");"
  mysqlPool.query(query, function(err, results, fields) {
    if (err) {
      console.log(err);
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

app.use(express.static(__dirname + '/../frontend'));

app.get('/user/:id', function(req, res) {
  res.send('user ' + req.params.id);
});
