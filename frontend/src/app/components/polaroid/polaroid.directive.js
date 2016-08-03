import '!ng-cache!./polaroid.html';

export default function polaroid(){
    return {
        restrict: 'E',
        templateUrl: 'polaroid.html', // markup for template
        scope: {
            data: '=',
            add: '='
        },
        link: function(scope, element, attr) {

          if(scope.add) {
            console.log('is add: ', scope.add);
            scope.action = function () {
              console.log('im clicked!');
            }
          } else {
            console.log('is remove: ');
            scope.action = function () {
              console.log('im removed!');
            }
          }





        }
    };

}
