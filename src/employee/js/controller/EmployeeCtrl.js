angular.module("cubicApp").controller("EmployeeCtrl",['$scope','staticService',"navBarService","employeeService",function($scope,staticService,navBarService,employeeService){
    
    $scope.employeesInfo=[];
    
    
    
    //Object for the model values
    $scope.employee = {
        "firstname":"",
        "lastname":"",
        "email":"",
        "phone":"",
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
            "firstname":$scope.employee.firstname,
            "lastname":$scope.employee.lastname,
            "email":$scope.employee.email,
            "phone":$scope.employee.phone
            
        };
        
        //Need to add validation for the form to avoid empty form entries
        employeeService.postEmployee(newEmployee).then(function(){
            //Calling service to get class list
             var employeeListPromise = employeeService.getEmployeeList();
            employeeListPromise.then(function(response){
                $scope.employeesInfo = response;
            });
        });
    }
    
}]);