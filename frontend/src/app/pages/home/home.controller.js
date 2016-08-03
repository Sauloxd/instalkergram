var homeCtrl = function (instagramFactory, $location, $localStorage) {
  var vm = this;
  vm.isAuth = instagramFactory.isAuth();
  console.log('ta autenticado? ', vm.isAuth);
  if(vm.isAuth) {
    instagramFactory.getUrls(vm.hashtag).then((response)=> {
        console.log('my urls: ', response.data);
      },
      (err) => {
        console.log('err', err)
      });
  }

  console.log('location: ', $location.absUrl());
  this.auth = function () {
      console.log('auth clicked');
      instagramFactory.authenticate();
  }

}

export default homeCtrl;
