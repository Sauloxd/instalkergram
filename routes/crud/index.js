var db = require('../../utils/db');

exports.createCategory = function(req, res) {
    var _category = req.body.category;

    db.insert('instalkergram', {category: _category, stalking: []}, function() {
        console.log('category ' + _category + ' inserted!');
        res.json({success: true});
    })
};

exports.getCategories = function(req, res) {
    var _results = [];
    db.find('instalkergram', {} , function(docs) {
        docs.forEach((item)=>{
          _results.push(item.category);
        })
        console.log(_results);
        res.json(_results);
    })
};


exports.updateCategory = function(req, res) {
    var _category = req.body.category;
    var _item = req.body.item;
    console.log('updating.. ' + _category + '...item..', _item);
    db.update('instalkergram', {category: _category, item: _item}, function() {
        console.log('item ' + _item + ' inserted!');
        res.json({success: true});
    })
};

exports.getImages = function(req, res) {
    var _category = req.params.category;
    db.find('instalkergram', {category: _category}, function(docs) {
        console.log('Images and hashtags:  ' + docs[0].stalking + '!');
        res.json(docs[0].stalking);
    })
};

exports.deleteImage = function(req, res) {
    var _category = req.body.category;
    var _item = req.body.item;

    db.delete('instalkergram', {category: _category, item: _item}, function() {
        console.log('hashtag ' + _item + ' removed!');
        res.json({success: true});
    })
};
