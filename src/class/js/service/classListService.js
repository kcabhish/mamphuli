angular.module("cubicApp").service("classListService",["$http",function($http){
    this.classList = [];
    var that  = this;
    var getClassList = function(){
        return $http({
            method:"GET",
            url:"/service/classes"
        }).then(function(result){
            that.classList = result.data;
            return result.data
        });
    }
    
    
    //Duplicate entries are currently being checked on the logic side.
    //@TODO Need to add validaion on sql side as well
    var postClass = function(dataParam){
        return $http({
            method:"POST",
            url:"/service/classes",
            data:dataParam
        }).then(function(result){
            return result.status;
        });
    }
    
    this.postClass = postClass;
    this.getClassList = getClassList;

}]);