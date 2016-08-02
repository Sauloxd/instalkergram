import '!ng-cache!./oauth.html';

export default function routes($stateProvider) {
  $stateProvider
    .state('oauth', {
      url: '/oauth',
      templateUrl: 'oauth.html',
      controller: 'oauthCtrl',
      controllerAs: 'oauthVm'
    });

}
