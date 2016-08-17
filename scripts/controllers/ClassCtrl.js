angular.module("cubicApp").controller("ClassCtrl",['$scope','navBarService',function($scope,navBarService){
    $scope.classDashboardItems = navBarService.classDashboardItems;
}]);