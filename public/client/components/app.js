angular.module('repConnect')
.controller('AppCtrl', function(civicInfo) {

  this.civicInfo = civicInfo;
  this.handleData = function(data) {
    this.offices = data.data.offices;
    this.officials = data.data.officials;
    this.selected = this.officials[2];
  }.bind(this);
  civicInfo.search('944 Market St, San Francisco', this.handleData);
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