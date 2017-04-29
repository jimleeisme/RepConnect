angular.module('repConnect')
.directive('repListEntry', function() {
  return {
    scope: {},
    restrict: 'E',
    controllerAs: 'ctrl',
    templateUrl: 'client/templates/repListEntry.html'
  };
});