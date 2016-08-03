var rp = require('request-promise');

exports.getUrls = function(req, res) {
    var _token = req.params.token;
    var options = {
    uri: 'https://api.instagram.com/v1/tags/search?q=biel',
    qs: {
            access_token: _token // -> uri + '?access_token=xxxxx%20xxxxx'
        },
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response
    };

    rp(options)
        .then(function (repos) {
            console.log('Response', repos);
        })
        .catch(function (err) {
            // API call failed...
            console.log('err', err);
        });



    console.log('my token: ', _token);
};
