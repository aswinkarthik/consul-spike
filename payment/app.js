var express = require('express');
var pg = require('pg');

var app = express();

app.get('/', function(req,res){
	console.log("[Payment] Incoming GET request for /");
	res.send('Hello World');
});

app.get('/ping', function(req,res){
	console.log("[Payment] Incoming GET request for /ping");
	res.send('pong');
});


app.post('/pay', function(req,res){
	console.log("[Payment] Incoming POST request for /availability");
	pay(req, res);
});


var server = app.listen(4000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
})




pay = function(req, res) {
	var connectionString = "postgres://vagrant@db.service.consul/tickets";

	pg.connect(connectionString, function(err, client, done){
		if(err) {
			return console.error('error fetching client from pool', err);
		}
		client.query('insert into payments values (DEFAULT)', [], function(err, result){
			done();

			if(err) {
				console.log("Querry error " + err);
			}

			res.send( "Paid");

		})
	});
}

