angular.module('repConnect')
.directive('repListEntry', function() {
  return {
    scope: {
      offices: '<',
      official: '<',
      index: '<'
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    controller: () => {},
    bindToController: true,
    templateUrl: 'client/templates/repListEntry.html'
  };
});