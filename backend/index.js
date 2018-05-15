const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysqlPool = require('./mysql.js');

// Use body-parser to handle post requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + '/../frontend'));

// Include routes
app.use(require('./routes/getAll.js'));
app.use(require('./routes/sortByRating.js'));
app.use(require('./routes/addAutomat.js'));
app.use(require('./routes/getAllBewertungen.js'));
app.use(require('./routes/getRating.js'));
app.use(require('./routes/addRating.js'));
app.use(require('./routes/getHeissGetraenke.js'));
app.use(require('./routes/addHeissGetraenk.js'));

app.listen(8081, function() {
  console.log("Server listening");
})
