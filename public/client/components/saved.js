angular.module('repConnect')
.controller('SavedController', function() {
  this.model = null;
  this.getData = function() {
    this.civicInfo.search(this.model, this.handleData);
  }
})
.directive('saved', function() {
  return {
    scope: {
      locations: '<',
      civicInfo: '<',
      handleData: '<'
    },
    restrict: 'E',
    controller: 'SavedController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'client/templates/saved.html'
  };
});