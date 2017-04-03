var crudFactory = function (constantsFactory, $http, $localStorage, $state) {
  var crud = {}

  crud.getCategories = function () {
    console.log('getting categories');
    return $http.get('http://instalkergram.herokuapp.com/get-categories');
  }

  crud.getItemsCategories = function (category) {
    console.log('getting categories');
    return $http.get('http://instalkergram.herokuapp.com/get-images/' + category);
  }

  crud.addToCategory = function (category, item) {
    console.log('add Categories');
    return $http.post('http://instalkergram.herokuapp.com/update-category', {category: category, item: item});
  }

  crud.removeFromCategory = function (category, item) {
    console.log('remove from Categories', category);
    console.log( ' my item', item);
    return $http.post('http://instalkergram.herokuapp.com/delete-image', {category: category, item: item});
  }

  return crud;
}

export default crudFactory;
