angular.module('repConnect')
.directive('repList', function() {
  return {
    scope: {},
    restrict: 'E',
    controllerAs: 'ctrl',
    templateUrl: 'client/templates/repList.html'
  };
});