var albumCtrl = function ($state) {
  var vm = this;
  vm.category = $state.params.category;
  console.log('album loaded');
}

export default albumCtrl;
