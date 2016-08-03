import angular from 'angular';
import uirouter from 'angular-ui-router';

import 'expose?jQuery!jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/index.css';

import routing from './app.config';
import navbarCtrl from './components/navbar/navbar.controller'
import home from './pages/home';
import album from './pages/album';
import oauth from './pages/oauth';
import factories from './factory';
import polaroid from './components/polaroid/polaroid.directive';

//this shit lib does not return its name when called
import 'ngstorage/ngStorage';
const ngStorage = 'ngStorage';

var initStuff = function($localStorage) {
  $localStorage.isAuth = false;
  console.log('initialized');
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, ngStorage, home, factories, oauth, album])
  .config(routing)
  .controller('initStuff', initStuff)
  .directive('polaroid', polaroid)
  .controller('navbarCtrl', navbarCtrl);

export default MODULE_NAME;
