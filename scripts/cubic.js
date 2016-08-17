var cubicApp = angular.module("cubicApp",['ngRoute']);
cubicApp.config(function($locationProvider,$routeProvider){
    $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : '/views/home.html'
            })
            .when('/home',{
                templateUrl : '/views/home.html'
            })
            .when('/classes',{
                controller : 'ClassCtrl',
                templateUrl : '/views/classes.html'
                
            })
            .when('/employees',{
                templateUrl : '/views/employee.html'
            })
            .when('/consultants',{
                templateUrl : '/views/consultants.html'
            })
            .when('/interviews',{
                templateUrl : '/views/interview.html'
            })
            .when('/inventory',{
                templateUrl : '/views/inventory.html'
            })
    ;
    $locationProvider
        .html5Mode(false)
        .hashPrefix('!');
   // $locationProvider.html5Mode(true);
});