var express = require('express');
var eventRouter = express.Router();

var mongodb = require('mongodb').MongoClient;


var links = [
              { Link: 'Services', Text: 'XServices' },
              { Link: 'Portfolio' , Text: 'EPortfolio' },
              { Link: 'About' , Text: 'EAbout' },
              { Link: 'Team' , Text: 'ETeam' },
              { Link: 'Contact' , Text: 'EContact' },
              { Link: 'Events' , Text: 'Events' }
            ];

eventRouter.route('/')
    .get(function(req, res) {
        
        var url = 'mongodb://localhost:27017/eventsApp';
        mongodb.connect(url, function(err, db){
           var collection = db.collection('events');
           collection.find({}).toArray(function(err, results){
                res.render('events',
                    {
                       nav: links,
                       events: results
                    });
           });
           db.close();
        });
        
       
    });

eventRouter.route('/:id')
    .get(function(req, res) {
        var id = req.params.id;
          res.render('event',
        {
            nav: links,
            events: eventsData[id]
        });
    });


module.exports = eventRouter;