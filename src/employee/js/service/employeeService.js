angular.module("cubicApp").factory("employeeService",['$http',function($http){
    return $http.get("/json/employee.json");
}]);