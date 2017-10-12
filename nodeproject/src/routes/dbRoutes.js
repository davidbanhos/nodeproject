var express = require('express');
var mongodb = require('mongodb').MongoClient;

var dbRouter = express.Router();

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
    },
    {
        name: 'Event 4',
        description: 'My 4 Event',
        date: '2014.04.04',
        time: '4:00 PM',
        duration: '4 hour',
        location: {
            streetAddr: '444 Main St.',
            city: 'City 4',
            state: 'C4',
            zip: '00004',
            lon: 4,
            lat: 4
            },
         capacity: 400
    }
];

dbRouter.route('/AddEventData')
    .get(function(req, res) {
        var url = 'mongodb://localhost:27017/eventsApp';
        mongodb.connect(url, function(err, db){
           var collection = db.collection('events');
           collection.insertMany(eventsData, function(err, results){
               res.send(results);
               db.close();
           });
        });

    });


module.exports = dbRouter;