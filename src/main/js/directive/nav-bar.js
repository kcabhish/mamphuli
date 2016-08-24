angular.module('cubicApp').directive('navBar',['navBarService',function(navBarService){
    return{
        restrict : "EA",
        scope : {},
        templateUrl:"/views/templates/nav-bar.html",
        link:function(scope){
            scope.menuItems = navBarService.menuBarItems;
        }
    }
}]);