import angular from 'angular';
import uirouter from 'angular-ui-router';


import routing from './oauth.routes';
import oAuthCtrl from './oauth.controller';
export default angular.module('app.oauth', [uirouter])
  .config(routing)
  .controller('oAuthCtrl', oAuthCtrl)
  .name; //Exporta o nome do modulo pra poder por na injecao de dependencia do angular
