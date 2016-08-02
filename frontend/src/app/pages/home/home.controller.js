var homeCtrl = function (instagramFactory, $location) {
  var vm = this;

  console.log('location: ', $location.absUrl());
  this.auth = function () {
      console.log('auth clicked');
      instagramFactory.getPhoto();
  }
  console.log('home ctrl loaded');
}

export default homeCtrl;
