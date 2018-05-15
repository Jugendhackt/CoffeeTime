const express = require('express');
const router = express.Router();
const mysqlPool = require('./../mysql.js');
const parser = require('./../typeStringParser.js')


router.get('/getAll', function(req, res) {
	mysqlPool.query('SELECT id as S_ID, name, standortlg, standortbg, (SELECT AVG(qualitaet) FROM Automat, Bewertung, Heissgetraenke WHERE Bewertung.heissgetreankid = Heissgetraenke.id AND Heissgetraenke.automatid = Automat.id AND Automat.id=S_ID) as quality FROM Automat',
  	function (error, results, fields) {
	    if (error) {
	      res.sendStatus(500);
	    } else {
		    var arr = [];
		    Promise.all(results.map(function(automat) {
		    	return new Promise(function (resolve, reject) {
			      	var automatobj = {
			      		id: automat.S_ID,
			        	name: automat.name,
			        	long: automat.standortlg,
			        	lat: automat.standortbg,
			        	quality: automat.quality,
			      	};
			      	var heissgetraenke= [];
			      	mysqlPool.query("SELECT id AS S_ID, name, preis, art, (SELECT AVG(qualitaet) FROM Bewertung WHERE Bewertung.heissgetreankid = S_ID) as quality FROM Heissgetraenke WHERE automatid = " + automat.S_ID +";", 
			      	function (err2, results2, fields2) {
			      		if (err2) {
			      			reject(err2)
			      		}
			      		if (!err2) {
			      			for (entry2 in results2) {
				      			heissgetraenke.push({
				      				id : results2[entry2].S_ID,
				      				name: results2[entry2].name,
				      				preis: results2[entry2].preis,
				      				art: parser(results2[entry2].art),
				      				quality: results2[entry2].quality,
				      			})
			      			}
			      			automatobj.heissgetraenke = heissgetraenke;
			      			resolve(automatobj);
			      		}
			      	})
		      })
		    }
		    )).then(function(array) {
		      	res.send(JSON.stringify(array));
		    }).catch(function(err) {
		    	res.sendStatus(500);
		    })
		}
  });
});

module.exports = router;