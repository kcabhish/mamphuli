angular.module("cubicApp").controller("ClassCtrl",['$scope','navBarService','staticService',function($scope,navBarService,staticService){
    $scope.classDashboardItems = navBarService.classDashboardItems;
    navBarService.toggleSelection(2);
    staticService.header = "Class";
    
    for (var i=0; i < $scope.classDashboardItems.length;i++){
        
    }
}]);