angular.module('repConnect')
.service('savedLocs', function($http, $window) {
  this.get = function(callback) {
    $http.get('/address')
    .then(function(data) {
      callback(data);
    })
    .catch(function(err) {
      console.error(err);
    });
  };
});