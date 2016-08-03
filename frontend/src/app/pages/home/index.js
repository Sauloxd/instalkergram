import angular from 'angular';
import uirouter from 'angular-ui-router';

import './home.css';

import polaroid from '../../components/polaroid/polaroid.directive';
import routing from './home.routes';
import HomeController from './home.controller';
export default angular.module('app.home', [uirouter])
  .config(routing)
  .directive('polaroid', polaroid)
  .controller('HomeController', HomeController)
  .name; //Exporta o nome do modulo pra poder por na injecao de dependencia do angular
