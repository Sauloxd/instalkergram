var db = require('../../utils/db');

exports.createCategory = function(req, res) {
    var _category = req.body.category;

    db.insert('instalkergram', {category: _category, stalking: []}, function() {
        console.log('category ' + _category + ' inserted!');
        res.json({success: true});
    })
};
