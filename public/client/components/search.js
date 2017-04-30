angular.module('repConnect')
.controller('SearchController', function() {
  this.getData = function() {
    this.civicInfo.search(this.input, this.handleData);
  };
  this.getLocs = function() {
    this.savedLocs.get(this.handleLocs);
  };
})
.directive('search', function() {
  return {
    scope: {
      civicInfo: '<',
      handleData: '<',
      savedLocs: '<',
      handleLocs: '<'
    },
    restrict: 'E',
    controller: 'SearchController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'client/templates/search.html'
  };
});