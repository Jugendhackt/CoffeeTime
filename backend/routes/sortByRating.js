const express = require('express');
const router = express.Router();
const mysqlPool = require('./../mysql.js');

router.get('/sortByRating', function (req, res){
	mysqlPool.query( 'SELECT id as S_ID, name, standortlg, standortbg, (SELECT AVG(qualitaet) FROM Automat, Bewertung, Heissgetraenke WHERE Bewertung.heissgetreankid = Heissgetraenke.id AND Heissgetraenke.automatid = Automat.id AND Automat.id=S_ID) as quality FROM Automat ORDER BY quality DESC',
	function (error, results, fields) {
		if (error) {
			res.sendStatus(500);
		} else {
			arr = [];

			results.forEach(entry => {
				arr.push({
			    	name: entry.name,
			    	long: entry.standortlg,
			    	lat: entry.standortbg,
			    	quality: entry.quality,
			  	});
			})

			res.send(JSON.stringify(arr));
		}
	})
});

module.exports = router;