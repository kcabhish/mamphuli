angular.module("cubicApp").controller("ClassListCtrl",['$scope','classListService','staticService',function($scope,classListService,staticService){
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
    
    staticService.header = "Class | Class List";

    /*
    This function will add the new class into the list
    */
    function addClass(){
        if ($scope.classModel.classTitle.length !==0){
            var newClassTitle = {
            'id':$scope.classes.length,
            'title':$scope.classModel.classTitle,
            'status':'active'
            };
        
            $scope.classes.push(newClassTitle);
            $scope.classModel.classTitle = "";
        }
        
    }
}]);