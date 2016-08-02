var instagramFactory = function ($location, constantsFactory, $http) {
  var _token = '';
  var instagram = {}

  instagram.authenticate = function () {
    console.log('getting photo...');
    console.log(' the url : ',  $location.absUrl().split('#')[0]);
    window.open("https://instagram.com/oauth/authorize/?client_id=" + constantsFactory.clientId +
        "&redirect_uri=" + constantsFactory.redirectUri +
        "&response_type=token", "igPopup");
  }

  instagram.getUrls = function (hashtag) {
    $http.post('http://localhost:3000/getUrlsFromInstagram', {token: _token}).then((response)=> {
      return response.data;
    },
      (err) => {
        console.log('err', err)
      });
    //
    // $http.get('https://api.instagram.com/v1/tags/' + hashtag + '?access_token=' + _token).then((response)=> {
    //   return response.data;
    // },
    //   (err) => {
    //     console.log('err', err)
    //   });
  }

  instagram.getToken = function() {
    return _token;
  }

  instagram.setToken = function(token) {
    _token = token;
  }



  return instagram;
}

export default instagramFactory;
