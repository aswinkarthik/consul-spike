var express = require('express');
var pg = require('pg');
var http = require('http');

var app = express();

app.get('/', function(req,res){
	console.log("[Availability]Incoming GET request for /");
	res.send('Hello World');
});

app.get('/ping', function(req,res){
	console.log("[Availability]Incoming GET request for /ping");
	res.send('pong');
});


app.get('/availability', function(req,res){
	console.log("[Availability]Incoming GET request for /availability");
	getAvailability(req, res);
});



app.post('/availability', function(req,res){
	console.log("[Availability]Incoming POST request for /availability");
	reduceAvailability(req,res);
	
});


var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
})



getAvailability = function(req, res) {
	var connectionString = "postgres://vagrant@db.service.consul/tickets";

	pg.connect(connectionString, function(err, client, done){
		if(err) {
			return console.error('error fetching client from pool', err);
		}
		client.query('SELECT ticket_count FROM availability', [], function(err, result){
			done();

			if(err) {
				console.log("Querry error " + err);
			}

			res.send( "Tickets :" + result.rows[0].ticket_count);

		})
	});
}



reduceAvailability = function(req, res) {
	var connectionString = "postgres://vagrant@db.service.consul/tickets";

	pg.connect(connectionString, function(err, client, done){
		if(err) {
			return console.error('error fetching client from pool', err);
		}
		client.query('UPDATE availability SET ticket_count = ticket_count - 1', [], function(err, result){
			done();

			if(err) {
				console.log("Querry error " + err);
			}

			res.send( "Booked");

		})
	});
}