angular.module("cubicApp").directive("dashboardContent",[function(){
    return{
        restrict:"EA",
        scope:{
            imagePath:'=',
            imageTitle:'=',
            path:'='
        },
        templateUrl:"/src/main/views/dashboard-content.html",
        link:function(scope,elem,attrs){
            
        }
    }
}]);