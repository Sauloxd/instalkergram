import '!ng-cache!./album.html';

export default function routes($stateProvider) {
  $stateProvider
    .state('album', {
      url: '/album/:category',
      templateUrl: 'album.html',
      controller: 'albumCtrl',
      controllerAs: 'albumVm'
    });

}
