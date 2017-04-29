angular.module('repConnect')
.directive('repListEntry', function() {
  return {
    scope: {
      official: '<'
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    controller: () => {},
    bindToController: true,
    templateUrl: 'client/templates/repListEntry.html'
  };
});