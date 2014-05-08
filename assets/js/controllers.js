'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('LogListController', function($scope, tabFilterService, logRestApi, mySocket) {
    function refreshList()  {
        logRestApi.getErrorList(tabFilterService.getActiveId()).success(function (response) {
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

    $scope.$watch(tabFilterService.getActiveId, function () {
       refreshList();
    }, true)

    refreshList();
})
.controller('TabController', function ($scope, tabFilterService) {
    $scope.tabList = tabFilterService.getTabList();

    $scope.getActiveClass = function (tab) {
        if (tab.id == tabFilterService.getActiveId()) {
            return 'active';
        }
    }

    $scope.clicked = function (tab) {
        tabFilterService.setActiveId(tab.id);
    }
});
