var instagramFactory = function ($location, constantsFactory, $http, $localStorage, $state) {
  var instagram = {}

  instagram.authenticate = function () {
    console.log(' the url : ',  $location.absUrl().split('#')[0]);
    $localStorage.isg = {};
    $localStorage.isg.isAuth = true;
    var igPopup = window.open("https://instagram.com/oauth/authorize/?client_id=" + constantsFactory.clientId +
        "&redirect_uri=" + constantsFactory.redirectUri +
        "&response_type=token" + "&scope=public_content", "igPopup");
  }

  instagram.getUrls = function (hashtag) {
    console.log('getting photo...');
    return $http.get('http://instalkergram.herokuapp.com/getUrlsFromInstagram/' + hashtag +'/'+ $localStorage.isg.token);
  }

  instagram.getToken = function() {
    return $localStorage.isg.token;
  }

  instagram.setToken = function(token) {
    $localStorage.isg.token = token;
  }

  instagram.isAuth = function() {
    if($localStorage.isg) {
      return $localStorage.isg.isAuth;
    } else {
      return false;
    }
  }

  instagram.unAuthenticate = function() {
    delete $localStorage.isg;
    //TODO: Improve the refresh of page
    location.reload();
  }

  return instagram;
}

export default instagramFactory;
