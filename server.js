var express = require('express');
var moment = require('moment');
var path = require('path');
var app = express();

var port = process.env.PORT || 8080;

app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
	process.on('uncaughtException', function (err) {
	    console.log(err);
	}); 
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
})

app.get('/:query', function(req, res) {
	var date = req.params.query;
	var u,
		n

	// If unix, else make unix & format text
	if (date == parseInt(date)) {
		u = parseInt(date);
		n = moment.unix(date).format('MMMM DD, YYYY');
	} else {
		u = moment(date).unix();
		n = moment(date).format('MMMM DD, YYYY');
	}
	
	// If Unix not integer, failure. Return null.
	if (u !== parseInt(u)) {
		u = null;
		n = null;
	}
	
	var obj = { 
		unix : u,
		natural : n
	};
	
	res.send(JSON.stringify(obj));
});