const express = require('express');
const router = express.Router();
const mysqlPool = require('./../mysql.js');

router.post('/addAutomat', function(req, res) {
	var name = mysqlPool.escape(req.body.name);
	var long = mysqlPool.escape(req.body.long);
	var lat = mysqlPool.escape(req.body.lat);
	var oeffnungszeit = mysqlPool.escape(req.body.opens);


	var gname = mysqlPool.escape(req.body.gName);
	var gpreis = mysqlPool.escape(req.body.gPreis);
	var gart = mysqlPool.escape(req.body.gArt);

	var quality = mysqlPool.escape(req.body.quality);
	var comment = mysqlPool.escape(req.body.comment);

	console.log(quality);

	var query = "INSERT INTO Automat(name, art, oeffnungszeit, standortlg, standortbg) VALUES ("
	+ name + ", 0," + oeffnungszeit + "," + long + "," + lat + ");"
	mysqlPool.query(query, function(err, results, fields) {
	if (err) {
	  res.sendStatus(500);
	} else {
		mysqlPool.query("INSERT INTO Heissgetraenke (name, preis, automatid, art) VALUES (" +
			gname + "," + gpreis + "," + results.insertId + "," + gart + ");", function (err2, result2, fields2) {
				if (err) {
					res.sendStatus(500);
				} else {
					mysqlPool.query("INSERT INTO Bewertung (kommentar, qualitaet, heissgetreankid) VALUES (" + 	comment + "," + quality + "," + result2.insertId + ");", 
						function (err3, result3, fields3) {
							if (err) {
								res.sendStatus(500);
							} else {
								res.redirect('/ok.html');
							}
					});
				}
		})

	  
	}
	})
});

module.exports = router;