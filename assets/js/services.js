'use strict';

angular.module('myApp.services', [])
.factory('logRestApi', function($http) {
    var logRestApi = {};

    logRestApi.getErrorList = function($channel) {
        return $http({
            method: 'GET',
            url:    '/log',
            params: {
                limit: 100,
                sort:  'id DESC',
                level_name: $channel
            }
        });
    }

    return logRestApi;
})
.factory('tabFilterService', function() {
});
