'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
    $scope.things = [];
    // $http.get('yourserver ... /flight_subscription', function(err, res) {
    $http.get('/app/data.json')
        .success(function(data, status, headers, config) {
            // console.log(data);
            $scope.things = data;
        })
        .error(function(data, status, headers, config) {

        });
}]);