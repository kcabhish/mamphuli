angular.module("cubicApp").controller("EmployeeCtrl",['$scope','staticService',"navBarService","employeeService",function($scope,staticService,navBarService,employeeService){
    
    $scope.employeesInfo=[];
    
    
    
    //Object for the model values
    $scope.employee = {
        "firstname":"",
        "lastname":"",
        "email":"",
        "search":""
    };
    
    staticService.header = "Employee";
    navBarService.toggleSelection(3);
    //Calling service to get class list
    var employeeListPromise = employeeService.getEmployeeList();
    employeeListPromise.then(function(response){
        $scope.employeesInfo = response;
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