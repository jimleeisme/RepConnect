angular.module('repConnect')
.controller('AppCtrl', function(civicInfo, savedLocs) {
  this.civicInfo = civicInfo;
  this.savedLocs = savedLocs;
  this.handleData = function(data) {
    this.offices = data.data.offices;
    this.officials = data.data.officials;
    this.selected = this.officials[2];
    this.selectedOffice = this.offices[2];
  }.bind(this);
  this.handleClick = function(official, position) {
    this.selected = official;
    this.selectedOffice = this.offices[position];
  }.bind(this);
  this.handleLocs = function(data) {
    this.locations = data;
  }
  savedLocs.get(this.handleLocs);
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