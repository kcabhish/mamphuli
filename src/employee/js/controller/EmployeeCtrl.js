angular.module("cubicApp").controller("EmployeeCtrl",['$scope','staticService',"navBarService","employeeService",function($scope,staticService,navBarService,employeeService){
    $scope.employee = {
        "firstName":"",
        "lastName":"",
        "email":"",
        "search":""
    };
    staticService.header = "Employee";
    navBarService.toggleSelection(3);
    employeeService.success(function(data){
        $scope.employeesInfo = data.employee;
    });
    
    //Function to add new employee to the list
    $scope.addEmployee = function(){
        var newEmployee = {
            "firstName":$scope.employee.firstName,
            "lastName":$scope.employee.lastName,
            "email":$scope.employee.email
            
        };
        $scope.employeesInfo.push(newEmployee);
    }
    
}]);