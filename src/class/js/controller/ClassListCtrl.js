angular.module("cubicApp").controller("ClassListCtrl",['$scope','classListService','staticService',function($scope,classListService,staticService){
    $scope.classes = [];
    
    //Calling service to get class list
    var classList = classListService.getClassList();
    classList.then(function(response){
        $scope.classes = response;
    });
    
    $scope.searchText = '';
    
    $scope.addClass = addClass;
    
    staticService.header = "Class | Class List";

    /*
    This function will add the new class into the list
    */
    function addClass(){
        if ($scope.classModel.classTitle.length !==0){
            var newClassTitle = {
                'description':$scope.classModel.classTitle,
                'active':1
            };
            
            //Need to check for duplicate before entry
            classListService.postClass(newClassTitle);
        }
        
    }
}]);