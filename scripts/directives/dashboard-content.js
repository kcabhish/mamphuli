angular.module("cubicApp").directive("dashboardContent",[function(){
    return{
        restrict:"EA",
        scope:{
            imagePath:'=',
            imageTitle:'=',
            path:'='
        },
        templateUrl:"/views/templates/dashboard-content.html",
        link:function(scope,elem,attrs){
            
        }
    }
}]);