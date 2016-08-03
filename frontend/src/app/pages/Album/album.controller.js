var albumCtrl = function ($state, crudFactory) {
  var vm = this;
  vm.category = $state.params.category;
  crudFactory.getItemsCategories('Album').then((response)=>{
    console.log('my data!', response.data);
    vm.data = response.data;
  }, (err) => {console.log('err', err)})
  console.log('album loaded');
}

export default albumCtrl;
