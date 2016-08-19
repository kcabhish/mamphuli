angular.module("cubicApp").controller("MainCtrl",['$scope','navBarService','staticService',function($scope,navBarService,staticService){   
    //Sets the scope variable from the navBarService
    $scope.menuItems = navBarService.menuBarItems;
    
    //Sets the title header from service
    $scope.title = staticService.header;
    
    //This will automatically update the title
    $scope.$watch(function(){
        return staticService.header;
    },function(){
        $scope.title = staticService.header;
    })
}]);