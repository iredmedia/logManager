'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', function($scope, ergastAPIservice, mySocket) {

    function refreshList()  {
        ergastAPIservice.getDrivers().success(function (response) {
            //Dig into the responde to get the relevant data
            $scope.driversList = response;
        }).error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
            console.log(data, status, headers, config);
          // or server returns response with an error status.
        });;
    }

    $scope.parseJson = function (jsonData) {
        return JSON.stringify(JSON.parse(jsonData), undefined, 2)
    }

    $scope.driversList = [];

      mySocket.on('some_event', function () {
        refreshList();
      });

      refreshList();
  })
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
