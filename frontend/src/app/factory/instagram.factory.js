var instagramFactory = function ($location, constantsFactory, $http) {
  var _token = '';
  var instagram = {}

  instagram.authenticate = function () {
    console.log(' the url : ',  $location.absUrl().split('#')[0]);
    var igPopup = window.open("https://instagram.com/oauth/authorize/?client_id=" + constantsFactory.clientId +
        "&redirect_uri=" + constantsFactory.redirectUri +
        "&response_type=token" + "&scope=public_content", "igPopup");
  }

  instagram.getUrls = function (hashtag) {
    console.log('getting photo...');
    return $http.get('http://localhost:3000/getUrlsFromInstagram/' + hashtag +'/'+ _token);
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
