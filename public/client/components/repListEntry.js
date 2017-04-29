angular.module('repConnect')
.directive('repListEntry', function() {
  return {
    scope: {},
    restrict: 'E',
    controllerAs: 'ctrl',
    // bindToController: true,
    templateUrl: 'client/templates/repListEntry.html'
  };
});