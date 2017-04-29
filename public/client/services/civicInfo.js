angular.module('repConnect')
.service('civicInfo', function($http, $window) {
  this.search = function(addr, callback) {
    $http.get('https://www.googleapis.com/civicinfo/v2/representatives', { params: {
      key: apiKey,
      address: addr
    }})
    .then(function(data) {
      callback(data);
    })
    .catch(function(err) {
      console.error(err);
    });
    // send address to server to save to db
    $http.post('/address', {
      data: { address: addr }
    })
    .catch(function(err) {
      console.error(err);
    });
  };
});