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
            .when('/classes/classlist',{
                controller:'ClassListCtrl',
                templateUrl:'/views/templates/class-list.html'
            })
            .when('/employees',{
                controller : 'EmployeeCtrl',
                templateUrl : '/views/employee.html'
            })
            .when('/consultants',{
                templateUrl : '/views/consultants.html'
            })
            .when('/interviews',{
                controller : 'InterviewCtrl',
                templateUrl : '/views/interview.html'
            })
            .when('/inventory',{
                controller : 'InventoryCtrl',
                templateUrl : '/views/inventory.html'
            })
            
    ;
    $locationProvider
        .html5Mode(false)
        .hashPrefix('!');
   // $locationProvider.html5Mode(true);
});