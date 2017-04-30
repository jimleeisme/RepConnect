angular.module('repConnect')
.controller('SavedController', function() {
  this.model = null;
})
.directive('saved', function() {
  return {
    scope: {
      locations: '<'
    },
    restrict: 'E',
    controller: 'SavedController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'client/templates/saved.html'
  };
});