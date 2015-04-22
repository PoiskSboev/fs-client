var productServices = angular.module('myApp.organisationServices', ['ngResource']);

productServices.factory('Organisation', ['$resource', function ($resource) {
    return $resource(
        'http://localhost:4730/organisation_list',
        {},
        {
            query: {
                method: 'GET',
                isArray: true
            }
        });
}]);
