import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import navbarCtrl from './components/navbar/navbar.controller'
import home from './pages/home';
import oauth from './pages/oauth';
import factories from './factory';

import 'expose?jQuery!jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/index.css';

//this shit lib does not return its name when called
import 'ngstorage/ngStorage';
const ngStorage = 'ngStorage';

var initStuff = function($localStorage) {
  $localStorage.isAuth = false;
  console.log('initialized');
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, ngStorage, home, factories, oauth])
  .config(routing)
  .controller('initStuff', initStuff)
  .controller('navbarCtrl', navbarCtrl);

export default MODULE_NAME;
