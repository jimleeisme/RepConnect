angular.module('repConnect')
.directive('search', function() {
  return {
    scope: {},
    restrict: 'E',
    controllerAs: 'ctrl',
    // bindToController: true,
    templateUrl: 'client/templates/search.html'
  };
});