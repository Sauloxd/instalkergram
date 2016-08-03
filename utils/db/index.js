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
        callback();
      });
};


exports.update = function(collection, query, callback) {
    var _collection = db.collection(collection);
    _collection.updateOne(
     { "category" : query.category },
     {
       $push: {
                "stalking": query.item
              }
     }, function(err, results) {
     callback();
  });
};

exports.find = function(collection, query, callback) {
  var _collection = db.collection(collection);
  var cursor = _collection.find(query);
  cursor.toArray(function (err, docs) {
      assert.equal(null, err);
      callback(docs);
  });
};

exports.delete = function(collection, query, callback) {
  var _collection = db.collection(collection);
  _collection.update(
    { "category": query.category },
    { $pull: { 'stalking': { hashtag: query.hashtag } } }, function(err, results) {
    callback();
  }
  );
};
