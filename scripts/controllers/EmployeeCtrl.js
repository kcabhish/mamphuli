angular.module("cubicApp").controller("EmployeeCtrl",['$scope','classListService','staticService',function($scope,classListService,staticService){
    staticService.header = "Employee";
}]);