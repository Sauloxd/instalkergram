import instagramFactory from './instagram.factory';
import constantsFactory from './constants.factory';

export default angular.module('factories', [])
  .factory('constantsFactory', constantsFactory)
  .factory('instagramFactory', instagramFactory)
  .name;
