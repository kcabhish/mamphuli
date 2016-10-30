angular.module("cubicApp").controller("ClassListCtrl",['$scope','classListService','staticService',function($scope,classListService,staticService){
    $scope.classes = [];
    $scope.classModel = {
        'classTitle':''
    };
    $scope.searchText = '';
    $scope.addClass = addClass;
    
    //Calling service to get class list
    var classListPromise = classListService.getClassList();
    classListPromise.then(function(response){
        $scope.classes = response;
    });
    
    staticService.header = "Class | Class List";

    //This function will check for duplicate entries
    function checkDuplicate(){
        var flag = false;
        $scope.classes.forEach(function(classObj){
            if (classObj.description.toLowerCase()===$scope.classModel.classTitle.toLowerCase()){
                flag = true;
            }
        });
        return flag;
    }
    
    /*
    This function will add the new class into the list
    */
    function addClass(){
        if ($scope.classModel.classTitle.length !==0){
            var newClassTitle = {
                'description':$scope.classModel.classTitle,
                'active':1
            };
            
            if (!checkDuplicate()){
                classListService.postClass(newClassTitle).then(function(){
                    //Calling service to get class list
                    var classListPromise = classListService.getClassList();
                    classListPromise.then(function(response){
                        $scope.classes = response;
                    });
                });
                $scope.classModel.classTitle = "";
            }
            else{
                alert("Duplcate: The class you are trying to insert already exists");
            }
            
            
        }
        
    }
}]);