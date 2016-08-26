angular.module("cubicApp").directive("employeeForm",[function(){
    return{
        restrict:"EA",
        templateUrl:"/src/employee/views/employee-form.html",
        link:function(scope){
            alert("Hello WOrld");
        }
    }
}]);