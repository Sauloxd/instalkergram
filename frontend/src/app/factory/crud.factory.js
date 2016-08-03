var crudFactory = function (constantsFactory, $http, $localStorage, $state) {
  var crud = {}

  crud.getCategories = function () {
    console.log('getting categories');
    return $http.get('http://localhost:3000/get-categories');
  }
  return crud;
}

export default crudFactory;
