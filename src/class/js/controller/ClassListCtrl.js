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
        checkDuplicate();
    });
    
    staticService.header = "Class | Class List";

    //This function will check for duplicate entries
    function checkDuplicate(){
        $scope.classes.forEach(function(classObj){
            if (classObj.description.toLowerCase()===$scope.classModel.classTitle.toLowerCase){
                return true;
            }
        });
        return false;
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
            classListService.postClass(newClassTitle).then(function(){
                //Calling service to get class list
                var classListPromise = classListService.getClassList();
                classListPromise.then(function(response){
                    $scope.classes = response;
                });
            });
            $scope.classModel.classTitle = "";
        }
        
    }
}]);