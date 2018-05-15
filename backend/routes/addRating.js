const express = require('express');
const router = express.Router();
const mysqlPool = require('./../mysql.js');

router.post('/:id/addRating', function(req, res) {
  var kommentar = mysqlPool.escape(req.body.comment);
  var qualitaet = mysqlPool.escape(req.body.quality);

  var query = "INSERT INTO Bewertung(kommentar, qualitaet, heissgetreankid) VALUES ("
  + kommentar + ", " + qualitaet + "," + mysqlPool.escape(req.params.id) + ");"
  mysqlPool.query(query, function(err, results, fields) {
    if (err) {
      res.send(500);
    } else {
      res.redirect("/ok.html")
    }
  })
});

module.exports = router;