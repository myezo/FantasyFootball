var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var mysql = require('mysql');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var port = process.env.PORT || 3000;

var app = express();

//allow sessions
app.use(session({ secret: 'app', cookie: { maxAge: 6*1000*1000*1000*1000*1000*1000 }}));
app.use(cookieParser());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var statsController = require("./controllers/statsController.js");

app.listen(port);

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mastermind315",
  database: "fantasy_db"
});

connection.connect(function(err){
	if(err) throw err;
	console.log('Connected as id: '+connection.threadId);
})

app.get('/', function(req, res){
	// res.send('hi')
	connection.query('SELECT * FROM tophundred;', function(err, data){
		//res.json(data);
		res.render('index', {tophundred:data});
	})
})