import '!ng-cache!./polaroid.html';

export default function polaroid(){
    return {
        restrict: 'E',
        templateUrl: 'polaroid.html', // markup for template
        scope: {
            data: '='
        },
        link: function(scope, element, attr) {
          console.log('my data: ', scope.data);
        }
    };

}
