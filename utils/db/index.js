var assert = require('assert');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var db;
MongoClient.connect('mongodb://instalkergram:qpalzm123@ds139735.mlab.com:39735/instalkergramdb', function (err, database) {
    assert.equal(null, err);
    //connection pull
    db = database;
    console.log('connected');
});

exports.insert = function(collection, query, callback) {
    var _collection = db.collection(collection);
    _collection.insertOne( query , function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the " + collection + " collection.");
        callback();
      });
};
