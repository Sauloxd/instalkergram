var navbarCtrl = function(instagramFactory) {
  var vm = this;
  vm.isAuth = instagramFactory.isAuth();
  vm.logout = function() {
    console.log('loggin out...');
    instagramFactory.unAuthenticate();
  }
  console.log('vm.isAuth', vm.isAuth);
}

export default navbarCtrl;
