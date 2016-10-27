angular.module("cubicApp").service("classListService",["$http",function($http){
    var getClassList = function(){
        return $http({
            method:"GET",
            url:"/service/classes"
        }).then(function(result){
            return result.data
        });
    }
    
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
//   this.classList = [
//       {
//           'id':1,
//           'title':'Java Basics',
//           'status':'active'       
//       },{
//           'id':2,
//           'title':'Java Advance',
//           'status':'active'
//       },{
//           'id':3,
//           'title':'UI',
//           'status':'active'
//       },{
//           'id':4,
//           'title':'C#',
//           'status':'active'
//       }
//       
//   ]; 
}]);