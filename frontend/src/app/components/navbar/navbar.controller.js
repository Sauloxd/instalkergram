var navbarCtrl = function(instagramFactory, crudFactory) {
  var vm = this;
  vm.isAuth = instagramFactory.isAuth();

  crudFactory.getCategories().then((response)=>{
    vm.categories = response.data;
  }, (err)=>{
    console.log('err', err);
  })

  vm.logout = function() {
    console.log('loggin out...');
    instagramFactory.unAuthenticate();
  }


  console.log('vm.isAuth', vm.isAuth);
}

export default navbarCtrl;
