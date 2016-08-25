angular.module('cubicApp').directive('navBar',['navBarService',function(navBarService){
    return{
        restrict : "EA",
        scope : {},
        templateUrl:"/src/main/views/nav-bar.html",
        link:function(scope){
            scope.menuItems = navBarService.menuBarItems;
        }
    }
}]);