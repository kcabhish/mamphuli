angular.module("cubicApp").controller("testCtrl",["$scope",function($scope){
    $scope.sampleText = "Hello World";
    var x=3;
    var y=4;
    $scope.add = function(){
        return x+y;
    };
    $scope.multiply = function(){
        return x*y;
    };
    
}]);