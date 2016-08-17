angular.module("cubicApp").controller("MainCtrl",['$scope','navBarService',function($scope,navBarService){   
    $scope.menuItems = navBarService.menuBarItems;
}]);