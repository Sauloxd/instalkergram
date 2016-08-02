var homeCtrl = function (instagramFactory, $location) {
  var vm = this;

  console.log('location: ', $location.absUrl());
  this.auth = function () {
      console.log('auth clicked');
      instagramFactory.authenticate();
  }
  console.log('home ctrl loaded');
  this.getUrls = function () {
      console.log('search for ', vm.hashtag);
      console.log('my token', instagramFactory.getToken());
      console.log('my urls ', instagramFactory.getUrls(vm.hashtag));
  }
}

export default homeCtrl;
