angular.module('repConnect')
.directive('repProfile', function() {
  return {
    scope: {},
    restrict: 'E',
    controllerAs: 'ctrl',
    templateUrl: 'client/templates/repProfile.html'
  };
});