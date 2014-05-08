'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'btford.socket-io',
    'myApp.controllers',
    'myApp.services',
    'myApp.filters'
])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: '/templates/partials/partial1.html', controller: 'LogListController'});
    $routeProvider.otherwise({redirectTo: '/view1'});
}])
.factory('mySocket', function (socketFactory) {
    return socketFactory();
});
