angular.module("cubicApp").controller("EmployeeCtrl",['$scope','staticService',function($scope,staticService){
    staticService.header = "Employee";
}]);