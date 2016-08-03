var albumCtrl = function ($state, crudFactory, $scope) {
  var vm = this;
  vm.category = $state.params.category;
  crudFactory.getItemsCategories('Album').then((response)=>{
    console.log('my data!', response.data);
    vm.data = response.data;
  }, (err) => {console.log('err', err)})
  console.log('album loaded');

  $scope.$on('itemDeleted', function (event, data) {
    console.log('my event is fired!', data); // 'Data to send'
    if (data.deleted) {
      vm.data.splice(data.index, 1);
    }

  });

}

export default albumCtrl;
