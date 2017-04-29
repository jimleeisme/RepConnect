angular.module('repConnect')
.directive('repProfile', function() {
  return {
    scope: {
      selected: '<',
      office: '<'
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    controller: () => {},
    bindToController: true,
    templateUrl: 'client/templates/repProfile.html'
  };
});