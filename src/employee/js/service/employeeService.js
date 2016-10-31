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
   // return $http.get("/json/employee.json");
}]);