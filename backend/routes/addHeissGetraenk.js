const express = require('express');
const router = express.Router();
const mysqlPool = require('./../mysql.js');

router.post('/:id/addHeissGetraenk', function(req, res) {
  var name = mysqlPool.escape(req.body.name);
  var preis = mysqlPool.escape(req.body.price);
  var art = mysqlPool.escape(req.body.type);

  var query = "INSERT INTO Heissgetraenke(name, preis, art,automatid) VALUES ("
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

module.exports = router;