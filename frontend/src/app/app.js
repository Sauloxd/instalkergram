import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './pages/home';
import oauth from './pages/oauth';
import factories from './factory';

import 'expose?jQuery!jquery/dist/jquery.min.js';
import '../styles/app.css';
import 'bootstrap';

console.log('carregou ctrl');
class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
    console.log('carregou ctrl');
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, home, factories, oauth])
  .config(routing)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
