var oauthCtrl = function ($location, instagramFactory, $state) {
  var vm = this;
  var token = $location.absUrl().split('#')[1].split('=')[1];
  console.log('this is my token! : ', token);
  instagramFactory.setToken(token);
  $state.go('home');
  console.log('oAuth loaded');
}

export default oauthCtrl;
