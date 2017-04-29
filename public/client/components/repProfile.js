angular.module('repConnect')
.directive('repProfile', function() {
  return {
    scope: {
      selected: '<'
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    controller: () => {},
    bindToController: true,
    templateUrl: 'client/templates/repProfile.html'
  };
});