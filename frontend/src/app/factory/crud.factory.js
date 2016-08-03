var crudFactory = function (constantsFactory, $http, $localStorage, $state) {
  var crud = {}

  crud.getCategories = function () {
    console.log('getting categories');
    return $http.get('http://localhost:3000/get-categories');
  }

  crud.getItemsCategories = function (category) {
    console.log('getting categories');
    return $http.get('http://localhost:3000/get-images/' + category);
  }

  crud.addToCategory = function (category, item) {
    console.log('add Categories');
    return $http.post('http://localhost:3000/update-category', {category: category, item: item});
  }

  crud.removeFromCategory = function (category, item) {
    console.log('remove from Categories', category);
    console.log( ' my item', item);
    return $http.post('http://localhost:3000/delete-image', {category: category, item: item});
  }

  return crud;
}

export default crudFactory;
