var homeCtrl = function (instagramFactory, $location, $localStorage) {
  var vm = this;
  vm.isAuth = instagramFactory.isAuth();
  console.log('ta autenticado? ', vm.isAuth);
  if(vm.isAuth) {

  }

  console.log('location: ', $location.absUrl());
  vm.auth = function () {
      console.log('auth clicked');
      instagramFactory.authenticate();
  }

  vm.search = function() {
    var query = vm.hashtag.split('#');
    if (query[0]) {
      console.log('valid!', query);
    } else {
      query = query[1];
      console.log('invalid', query);
    }
    console.log('query: ', query);
    instagramFactory.getUrls(query).then((response)=> {
        console.log('my urls: ', response.data);
      },
      (err) => {
        console.log('err', err)
      });
  }

}

export default homeCtrl;
