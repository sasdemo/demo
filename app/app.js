'use strict';

(function(){
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
          .when('/contact', {
              templateUrl: 'partials/contact.html'
          })
          .when('/account', {
              templateUrl: 'partials/account.html'
          })
          .when('/register', {
              templateUrl: 'partials/register.html'
          })
          .when('/support', {
              templateUrl: 'partials/support.html'
          })
          .when('/getting-started', {
              templateUrl: 'partials/getting-started.html'
          })
          .when('/faq', {
              templateUrl: 'partials/faq.html'
          })
          .when('/training', {
              templateUrl: 'partials/training.html'
          })
          .when('/basic', {
              templateUrl: 'partials/basic.html'
          })
          .when('/login', {
              templateUrl: 'partials/login.html'
          })
          .otherwise({redirectTo: '/home'});
    }]);

    myApp.controller('NavController', ['$scope', '$location', function($scope, $location) {
        $scope.navClass = function (page) {
          var currentRoute = $location.path().substring(1) || 'projects';
          console.log("navclass: "+ (page === currentRoute ? 'active' : ''))
          return page === currentRoute ? 'active' : '';
        };
    }]);

    myApp.controller('FrontController', ['$scope', '$http', function($scope, $http) {
        var vm = this;

        $scope.formSubmit = function () {
            if(vm.contactForm.$valid){

                var data = {
                    'name' : vm.comment.name,
                    'email' : vm.comment.email,
                    'msg' : vm.comment.msg
                };

                $http.post('mail.php', data)
                    .success(function(data, status, headers, config)
                    {
                        showConfirmation();
                    })
                    .error(function(data, status, headers, config)
                    {
                        console.log('error');
                    });

            }

            vm.contactForm.$setPristine();

            vm.comment.name  = null;
            vm.comment.email = null;
            vm.comment.msg = null;
        };

        function showConfirmation(){
            $scope.showConfirmation = true;
            setTimeout(function() {
                $scope.$apply(function(){
                    $scope.showConfirmation = false;
                });
            }, 5000);
        }
    }]);
})();

