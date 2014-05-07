'use strict';

angular.module('myApp.services', [])
  .factory('ergastAPIservice', function($http) {

    var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'GET',
        url:    '/log',
        params: {
          limit: 100,
          sort:  'id DESC'
        }
      });
    }

    return ergastAPI;
  });
