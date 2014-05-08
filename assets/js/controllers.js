'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('LogListController', function($scope, $rootScope, logRestApi, mySocket) {

    function refreshList($channel)  {
        if (typeof($channel) === "undefined") { $channel = 'ERROR'; }


        logRestApi.getErrorList($channel).success(function (response) {
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

    $rootScope.$on('tab:changed', function ($level_name, id) {
        refreshList(id);
    });

    refreshList();
})
.controller('TabController', function ($scope) {
    $scope.activeTabId = 'error';

    $scope.tabList = [
        {
            id: 'ERROR',
            name: 'Error'
        },
        {
            id: 'INFO',
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

        $scope.$emit('tab:changed', tab.id);
    }
});
