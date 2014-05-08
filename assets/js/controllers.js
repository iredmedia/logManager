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
})
.controller('TabController', function ($scope) {
    $scope.activeTabId = 'error';

    $scope.tabList = [
        {
            id: 'error',
            name: 'Error'
        },
        {
            id: 'info',
            name: 'Info'
        },
    ]

    $scope.getActiveClass = function (tab) {
        if (tab.id == $scope.activeTabId) {
            return 'active';
        }
    }

    $scope.clicked = function (tab) {
        $scope.activeTabId = tab.id;
    }
});
