var express = require('express');
var app = express();
var eventRouter = express.Router();

eventRouter.route('/')
    .get(function(req, res) {
        res.send('Hello Events!');
    });

eventRouter.route('/event')
    .get(function(req, res) {
        res.send('Hello Single Event!');
    });

app.use('/Events',eventRouter);

//Cloud9 por assignment
var port = process.env.PORT;

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
