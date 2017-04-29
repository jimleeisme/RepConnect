angular.module('repConnect')
.directive('repList', function() {
  return {
    scope: {
      offices: '<',
      officials: '<'
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    controller: () => {},
    bindToController: true,
    templateUrl: 'client/templates/repList.html'
  };
});