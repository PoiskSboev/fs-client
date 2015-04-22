'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', 'Organisation', function($scope, $http, Organisation) {
    $scope.things = [];
        $http.defaults.useXDomain = true;
    // $http.get('yourserver ... /flight_subscription', function(err, res) {
    $http.get('http://localhost:4730/organisation_list')
        .success(function(data, status, headers, config) {
             //console.log(data);
            $scope.things = data;
            $scope.organisations = Organisation.query();
        })
        .error(function(data, status, headers, config) {

        });
}]);