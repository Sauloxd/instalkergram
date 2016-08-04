var loadingConfig = function($httpProvider) {
    $httpProvider.interceptors.push('loadingService');
}

export default loadingConfig;
