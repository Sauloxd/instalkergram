var db = require('../../utils/db');

exports.createCategory = function(req, res) {
    var _category = req.body.category;

    db.insert('instalkergram', {category: _category, stalking: []}, function() {
        console.log('category ' + _category + ' inserted!');
        res.json({success: true});
    })
};

exports.updateCategory = function(req, res) {
    var _category = req.body.category;
    var _hashtag = req.body.hashtag;
    var _url = req.body.url;

    db.update('instalkergram', {category: _category, hashtag: _hashtag, url: _url}, function() {
        console.log('hashtag ' + _hashtag + ' inserted!');
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
    var _hashtag = req.body.hashtag;

    db.delete('instalkergram', {category: _category, hashtag: _hashtag}, function() {
        console.log('hashtag ' + _hashtag + ' removed!');
        res.json({success: true});
    })
};
