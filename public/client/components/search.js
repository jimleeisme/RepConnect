angular.module('repConnect')
.controller('SearchController', function() {
  this.getData = function() {
    console.log('clicked')
    this.search.search(this.input, this.handle);
  };
})
.directive('search', function() {
  return {
    scope: {
      search: '<',
      handle: '<'
    },
    restrict: 'E',
    controller: 'SearchController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'client/templates/search.html'
  };
});