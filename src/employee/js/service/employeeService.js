angular.module("cubicApp").service("employeeService",['$http',function($http){
    this.employeeList = [];
    var that = this;
    this.getEmployeeList = function(){
        return $http({
            method:"GET",
            url:"/service/employees"
        }).then(function(result){
            that.employeeList = result.data;
            return result.data
        });
    }
    //Duplicate entries are currently being checked on the logic side.
    //@TODO Need to add validaion on sql side as well
    this.postEmployee = function(dataParam){
        return $http({
            method:"POST",
            url:"/service/employees",
            data:dataParam
        }).then(function(result){
            return result.status;
        });
    }
}]);