const express = require('express');
const router = express.Router();
const mysqlPool = require('./../mysql.js');

router.get('/:id/getAllBewertungen', function(req, res) {
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

module.exports = router;