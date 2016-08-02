var instagramFactory = function ($location, constantsFactory) {

  var instagram = {}

  instagram.getPhoto = function () {
    console.log('getting photo...');
    console.log(' the url : ',  $location.absUrl().split('#')[0]);
    window.open("https://instagram.com/oauth/authorize/?client_id=" + constantsFactory.clientId +
        "&redirect_uri=" + constantsFactory.redirectUri +
        "&response_type=token", "igPopup");
  }

  return instagram;
}

export default instagramFactory;
