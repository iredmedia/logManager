'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('MyCtrl1', function($scope, logRestApi, mySocket) {

    function refreshList()  {
        logRestApi.getErrorList().success(function (response) {
            $scope.list = response;
        }).error(function(data, status, headers, config) {
            console.log(data, status, headers, config);
        });;
    }

    $scope.getClass = function (info) {
        if (info == 'INFO') {
            return 'success';
        }

        if (info == 'ERROR') {
            return 'danger';
        }
    }

    $scope.list = [];

    mySocket.on('some_event', function () {
        refreshList();
    });

    refreshList();
})
.controller('MyCtrl2', function($scope, logRestApi, mySocket) {

    function refreshList()  {
        logRestApi.getInfoList().success(function (response) {
            $scope.list = response;
        }).error(function(data, status, headers, config) {
            console.log(data, status, headers, config);
        });;
    }

    $scope.getClass = function (info) {
        if (info == 'INFO') {
            return 'success';
        }

        if (info == 'ERROR') {
            return 'danger';
        }
    }

    $scope.list = [];

    mySocket.on('some_event', function () {
        refreshList();
    });

    refreshList();
});
