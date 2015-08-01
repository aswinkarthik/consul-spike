var express = require('express');
var http = require('http');

var app = express();

app.get('/', function(req,res){
	console.log("[Front-end] Incoming GET request for /");
	res.send('Hello World');
});

app.get('/ping', function(req,res){
	console.log("[Front-end] Incoming GET request for /ping");
	res.send('pong');
});


app.get('/tickets', function(req,res){
	console.log("[Front-end] Incoming GET request for /tickets");
	gettickets(req, res);
});

app.post('/tickets', function(req,res){
	console.log("[Front-end] Incoming POST request for /tickets");
	makePayment(req,res,reduceAvailability);
});


var server = app.listen(5000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
})

gettickets = function(req, res) {
	var request = http.request({
		host: 'availability.service.consul',
		path: '/availability',
		port: 3000,
		method: "GET"
	}, function(response){
		var data = '';
		response.on('data', function(d){
			data += d;
		});
		response.on('end', function(){
			console.log(data);
			res.send(data);
		});
	});
	request.end();
}


makePayment = function(req, res, callback) {
	var request = http.request({
		host: 'payment.service.consul',
		path: '/pay',
		port: 4000,
		method: "POST"
	}, function(response){
		var data = '';
		response.on('data', function(d){
			data += d;
		});
		response.on('end', function(){
			console.log(data);
			callback(req, res);
		});
	});
	request.end();
}


reduceAvailability = function(req, res) {
	var request = http.request({
		host: 'availability.service.consul',
		path: '/availability',
		port: 3000,
		method: "POST"
	}, function(response){
		var data = '';
		response.on('data', function(d){
			data += d;
		});
		response.on('end', function(){
			console.log(data);
			res.send(data);
		});
	});
	request.end();
}
