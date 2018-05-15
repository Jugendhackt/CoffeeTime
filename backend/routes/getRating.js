const express = require('express');
const router = express.Router();
const mysqlPool = require('./../mysql.js');

router.get('/:id/getRating', function(req, res) {
  mysqlPool.query('SELECT avg(qualitaet) as qualitaet FROM Bewertung WHERE heissgetreankid='+ mysqlPool.escape(req.params.id) +';',
  function (error, results, fields) {
    if (error) {
      console.log(error);
    }
    res.send(JSON.stringify(results));
  });
})

module.exports = router;