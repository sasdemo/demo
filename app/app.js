'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {

  $routeProvider
      .when('/home', {
        templateUrl: 'partials/home.html'
      })
      .when('/products', {
        templateUrl: 'partials/products.html'
      })
      .when('/demos', {
        templateUrl: 'partials/demos.html'
      })
      .when('/docs', {
          templateUrl: 'partials/docs.html'
      })
      .when('/about', {
          templateUrl: 'partials/about.html'
      })
      .when('/account', {
          templateUrl: 'partials/account.html'
      })
      .when('/register', {
          templateUrl: 'partials/register.html'
      })
      .otherwise({redirectTo: '/home'});
}]);

myApp.controller('NavController', ['$scope', '$location', function($scope, $location) {
    $scope.navClass = function (page) {
      var currentRoute = $location.path().substring(1) || 'projects';
      return page === currentRoute ? 'active' : '';
    };
}]);
