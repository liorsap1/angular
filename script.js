//   
var module = angular.module("sampleApp", ['ngRoute']);

    module.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/route1', {
                    templateUrl: 'page1.html',
                    controller: 'RouteController'
                }).
                when('/route2', {
                    templateUrl: 'page2.html',
                    controller: 'RouteController'
                }).
                when('/route3', {
                    templateUrl: 'page3.html',
                    controller: 'RouteController'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }]);

    module.controller("RouteController", function($scope) {

    })