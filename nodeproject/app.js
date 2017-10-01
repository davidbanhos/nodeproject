var express = require('express');
var app = express();

//Cloud9 por assignment
var port = process.env.PORT;

//Static
app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(express.static('bower_components'));

//Routing
app.get('/', function(req, res){
    res.send('Hello World!');
});

//Routing
app.get('/routing', function(req, res){
    res.send('Hello World! - ROUTING');
});

app.listen(port,function(err){
   console.log('The server is running on port: ' + port); 
});