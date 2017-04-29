angular.module('repConnect')
.controller('AppCtrl', function(civicInfo) {
  // this.reps = null;
  // this.currentRep = null;
  this.handleData = function(data) {
    this.reps = data;
    // this.currentRep = this.reps[0];
  };
})
.directive('app', function() {
  return {
    scope: {},
    restrict: 'E',
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'client/templates/app.html'
  };
});