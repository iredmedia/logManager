'use strict';

angular.module('myApp.services', [])
.factory('logRestApi', function($http) {
    var logRestApi = {};

    logRestApi.getErrorList = function() {
        return $http({
            method: 'GET',
            url:    '/log',
            params: {
                limit: 100,
                sort:  'id DESC',
                level_name: 'ERROR'
            }
        });
    }

    logRestApi.getInfoList = function() {
        return $http({
            method: 'GET',
            url:    '/log',
            params: {
                limit: 100,
                sort:  'id DESC',
                level_name: 'INFO'
            }
        });
    }

    return logRestApi;
});
