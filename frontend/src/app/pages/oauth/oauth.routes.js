import '!ng-cache!./oauth.html';

export default function routes($stateProvider) {
  $stateProvider
    .state('oauth', {
      url: '/home/#access_token={access_token}',
      templateUrl: 'oauth.html',
      controller: 'oauthCtrl',
      controllerAs: 'oauthVm'
    });

}
