angular.module("cubicApp").controller("ClassListCtrl",['$scope','classListService',function($scope,classListService){
    /*
    This should grab the list of clases from the service
    */
    $scope.classes = classListService.classList;
    //This object will be used of ng-model
    $scope.classModel = {
        'classTitle':''
    };
    
    $scope.searchText = '';
    
    $scope.addClass = addClass;

    /*
    This function will add the new class into the list
    */
    function addClass(){
        
        var newClassTitle = {
            'id':$scope.classes.length,
            'title':$scope.classModel.classTitle,
            'status':'active'
        };
        
        $scope.classes.push(newClassTitle);
    }
}]);