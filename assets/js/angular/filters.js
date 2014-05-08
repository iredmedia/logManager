angular.module('myApp.filters', []).filter('jsonFormat', function() {
  return function(input) {
    return JSON.stringify(JSON.parse(input), undefined, 2);
  };
});
