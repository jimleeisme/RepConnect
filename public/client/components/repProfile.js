angular.module('repConnect')
.directive('repProfile', function() {
  return {
    scope: {},
    restrict: 'E',
    controllerAs: 'ctrl',
    // bindToController: true,
    templateUrl: 'client/templates/repProfile.html'
  };
});