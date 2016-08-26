angular.module("cubicApp").controller("InterviewCtrl",['$scope','classListService','staticService','navBarService',function($scope,classListService,staticService,navBarService){
    staticService.header = "Interview";
    navBarService.toggleSelection(5);
}]);