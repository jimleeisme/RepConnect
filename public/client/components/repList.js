angular.module('repConnect')
.directive('repList', function() {
  return {
    scope: {},
    restrict: 'E',
    controllerAs: 'ctrl',
    // bindToController: true,
    templateUrl: 'client/templates/repList.html'
  };
});