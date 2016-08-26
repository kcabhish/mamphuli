var cubicApp = angular.module("cubicApp",['ngRoute']);
cubicApp.config(function($locationProvider,$routeProvider){
    $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : '/src/main/views/home.html'
            })
            .when('/home',{
                templateUrl : '/src/main/views/home.html'
            })
            .when('/classes',{
                controller : 'ClassCtrl',
                templateUrl : '/src/class/views/classes.html'   
            })
            .when('/classes/classlist',{
                controller:'ClassListCtrl',
                templateUrl:'/src/class/views/class-list.html'
            })
            .when('/employees',{
                controller : 'EmployeeCtrl',
                templateUrl : '/src/employee/views/employee.html'
            })
            .when('/consultants',{
                controller : "ConsultantsCtrl",
                templateUrl : '/src/consultant/views/consultants.html'
            })
            .when('/interviews',{
                controller : 'InterviewCtrl',
                templateUrl : '/src/interview/views/interview.html'
            })
            .when('/inventory',{
                controller : 'InventoryCtrl',
                templateUrl : '/src/inventory/views/inventory.html'
            })
            .when('/application',{
                controller : 'ApplicationCtrl',
                templateUrl : '/src/application/views/application.html'
             })
            .otherwise({
                templateUrl : "/src/main/error.html"
            });
            
    ;
    $locationProvider
        .html5Mode(false)
        .hashPrefix('!');
   // $locationProvider.html5Mode(true);
});