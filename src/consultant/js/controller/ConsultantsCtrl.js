angular.module("cubicApp").controller("ConsultantsCtrl",['$scope','classListService','staticService','navBarService',function($scope,classListService,staticService,navBarService){
    staticService.header = "Consultants";
    navBarService.toggleSelection(4);
}]);