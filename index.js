var express = require('express');
var app = express();
var users = require('./users.json');

app.get('/user', function(req, res){
	let id = req.query.uid;
	let user = users.find(u => u.id == id);
	if(user == null)
	{
		user = {message: 'no user found'};
	}
	res.header("Content-Type", 'application/json');
	res.send(JSON.stringify(user, null, 2));
});


app.get('/users/all', function(req, res){
	users.sort(function(a, b){
		return a.username.localeCompare(b.username);
	});	

	res.header("Content-Type",'application/json');
	res.send(JSON.stringify(users, null, 2));	
});

app.listen(8081);
