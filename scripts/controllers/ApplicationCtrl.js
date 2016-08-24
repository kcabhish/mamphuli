angular.module("cubicApp").controller("ApplicationCtrl",['$scope','applicationService','staticService',function($scope,applicationService,staticService){
    staticService.header = "Application";
    $scope.applicationDashboardItems = applicationService.applicationList;
}]);