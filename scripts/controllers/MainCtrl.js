angular.module("cubicApp").controller("MainCtrl",['$scope','navBarService','staticService',function($scope,navBarService,staticService){   
    $scope.menuItems = navBarService.menuBarItems;
    $scope.title = staticService.header;
}]);