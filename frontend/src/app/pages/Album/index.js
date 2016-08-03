import angular from 'angular';
import uirouter from 'angular-ui-router';


import routing from './album.routes';
import albumCtrl from './album.controller';
export default angular.module('app.album', [uirouter])
  .config(routing)
  .controller('albumCtrl', albumCtrl)
  .name; //Exporta o nome do modulo pra poder por na injecao de dependencia do angular
