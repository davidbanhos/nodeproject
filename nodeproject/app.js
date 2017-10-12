var express = require('express');
var app = express();

//Cloud9 por assignment
var port = process.env.PORT;

var eventRouter = require('./src/routes/eventRoutes');
var dbRouter = require('./src/routes/dbRoutes');

app.use('/Events',eventRouter);
app.use('/Db',dbRouter);


//Static
app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

//Routing
app.get('/', function(req, res){
    res.render('index',
        {
            list: ['val1', 'val2', 'val3'],
            //nav: ['Services', 'Portfolio', 'About', 'Team', 'Contact']
            nav: [
                    { Link: 'Services', Text: 'Services' },
                    { Link: 'Portfolio' , Text: 'Portfolio' },
                    { Link: 'About' , Text: 'About' },
                    { Link: 'Team' , Text: 'Team' },
                    { Link: 'Contact' , Text: 'Contact' },
                    { Link: 'Events' , Text: 'Events' }
            ]
        }   
    );
});

//Routing
app.get('/routing', function(req, res){
    res.send('Hello World! - ROUTING');
});

app.listen(port,function(err){
   console.log('The server is running on port: ' + port); 
});
