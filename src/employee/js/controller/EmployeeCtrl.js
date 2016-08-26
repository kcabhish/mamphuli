angular.module("cubicApp").controller("EmployeeCtrl",['$scope','staticService',"navBarService",function($scope,staticService,navBarService){
    staticService.header = "Employee";
    navBarService.toggleSelection(3);
}]);