'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'btford.socket-io',
  'myApp.controllers',
  'myApp.services'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: '/templates/partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: '/templates/partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}])
.factory('mySocket', function (socketFactory) {
  return socketFactory();
})
;
