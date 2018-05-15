const express = require('express');
const router = express.Router();
const mysqlPool = require('./../mysql.js');

router.get('/:id/getHeissGetreanke', function(req, res) {
  mysqlPool.query('SELECT * FROM Heissgetraenke WHERE automatid = '+ mysqlPool.escape(req.params.id) +';',
  function (error, results, fields) {
    if (error) {
      	res.send(500);
    } else {
    	res.send(JSON.stringify(results));
    }
  });
})

module.exports = router;