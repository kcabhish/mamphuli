angular.module("cubicApp").controller("ApplicationCtrl",['$scope','applicationService','staticService','navBarService',function($scope,applicationService,staticService,navBarService){
    staticService.header = "Application";
    $scope.applicationDashboardItems = applicationService.applicationList;
    navBarService.toggleSelection(7);
}]);