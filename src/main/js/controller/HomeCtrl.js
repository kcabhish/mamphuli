angular.module("cubicApp").controller("HomeCtrl",['$scope','navBarService',function($scope,navBarService){
    navBarService.toggleSelection(1);
}]);