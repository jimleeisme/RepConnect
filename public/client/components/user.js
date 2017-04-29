angular.module('repConnect')
.directive('user', function() {
  return {
    scope: {},
    restrict: 'E',
    controllerAs: 'ctrl',
    templateUrl: 'client/templates/user.html'
  };
});