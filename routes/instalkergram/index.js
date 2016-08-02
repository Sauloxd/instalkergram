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
