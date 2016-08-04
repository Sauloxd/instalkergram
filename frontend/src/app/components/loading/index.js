import loadingService from './loading.service';
import loadingConfig from './loading.config';


export default angular.module('loading', [])
  .config(loadingConfig)
  .service('loadingService', loadingService)
  .name;
