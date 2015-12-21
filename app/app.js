'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  //'myApp.view1',
  //'myApp.view2',
  //'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {

  $routeProvider
      .when('/projects', {
        templateUrl: 'partials/projects.html',
        controller: 'NavController'
      })
      .when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'NavController'
      })
      .when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'NavController'
      })
      .otherwise({redirectTo: '/projects'});
}]);

myApp.controller('NavController', ['$scope', '$location', function($scope, $location) {
    $scope.navClass = function (page) {
      var currentRoute = $location.path().substring(1) || 'projects';
      return page === currentRoute ? 'active' : '';
    };
}]);
