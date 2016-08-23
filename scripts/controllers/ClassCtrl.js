angular.module("cubicApp").controller("ClassCtrl",['$scope','navBarService','staticService',function($scope,navBarService,staticService){
    $scope.classDashboardItems = navBarService.classDashboardItems;
    staticService.header = "Class";
    
    for (var i=0; i < $scope.classDashboardItems.length;i++){
        
    }
}]);