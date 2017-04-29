angular.module('repConnect')
.controller('SearchController', function() {
  this.getData = function() {
    this.civicInfo.search(this.input, this.handleData);
  };
})
.directive('search', function() {
  return {
    scope: {
      civicInfo: '<',
      handleData: '<'
    },
    restrict: 'E',
    controller: 'SearchController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'client/templates/search.html'
  };
});