var express = require('express');
var app = express();
var eventRouter = express.Router();


var eventsData = [
    {
        name: 'Event 1',
        description: 'My First Event',
        date: '2016.01.01',
        time: '1:00 PM',
        duration: '1 hour',
        location: {
            streetAddr: '101 Main St.',
            city: 'City 1',
            state: 'CA',
            zip: '00001',
            lon: 0,
            lat: 0
            },
         capacity: 100
    },
    {
        name: 'Event 2',
        description: 'My 2 Event',
        date: '2016.02.02',
        time: '2:00 PM',
        duration: '2 hour',
        location: {
            streetAddr: '202 Main St.',
            city: 'City 2',
            state: 'C2',
            zip: '00002',
            lon: 2,
            lat: 2
            },
         capacity: 200
    },
    {
        name: 'Event 3',
        description: 'My 3 Event',
        date: '2016.03.03',
        time: '3:00 PM',
        duration: '3 hour',
        location: {
            streetAddr: '333 Main St.',
            city: 'City 3',
            state: 'C3',
            zip: '00003',
            lon: 3,
            lat: 3
            },
         capacity: 300
    }
];

eventRouter.route('/')
    .get(function(req, res) {
        res.render('events',
        {
            nav: [
                    { Link: 'Services', Text: 'EServices' },
                    { Link: 'Portfolio' , Text: 'EPortfolio' },
                    { Link: 'About' , Text: 'EAbout' },
                    { Link: 'Team' , Text: 'ETeam' },
                    { Link: 'Contact' , Text: 'EContact' },
                    { Link: 'Events' , Text: 'Events' }
            ],
            events: eventsData
        });
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
