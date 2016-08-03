var rp = require('request-promise');

exports.getUrls = function(req, res) {
    var _token = req.params.token;
    var _q = req.params.q;
    var options = {
    uri: 'https://api.instagram.com/v1/tags/'+_q+'/media/recent',
    qs: {
            access_token: _token // -> uri + '?access_token=xxxxx%20xxxxx'
        },
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response
    };

    rp(options)
        .then(function (response) {
            console.log('Response', response.data);
            return res.json(response.data);
        })
        .catch(function (err) {
            // API call failed...
            console.log('err', err.message);
        });



    console.log('my token: ', _token);
};
