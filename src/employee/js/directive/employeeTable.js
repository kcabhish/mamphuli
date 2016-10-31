angular.module("cubicApp").directive("employeeTable",[function(){
    return {
        restirct :"EA",
        templateUrl :"/src/employee/views/employee-table.html",
        link:function(scope){
            scope.sortBy="lastname";
            scope.sortReverse=false;
            
            scope.sortFunction = function(sortBy){
                if (scope.sortBy!=sortBy){
                    scope.sortReverse = false;
                    scope.sortBy=sortBy;
                }
                else{
                    scope.sortReverse=!scope.sortReverse;
                }
            }
        }
    }
}]);