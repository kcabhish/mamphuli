angular.module("cubicApp").service("classListService",function(){
   this.classList = [
       {
           'id':1,
           'title':'Java Basics',
           'status':'active'       
       },{
           'id':2,
           'title':'Java Advance',
           'status':'active'
       },{
           'id':3,
           'title':'UI',
           'status':'active'
       },{
           'id':4,
           'title':'C#',
           'status':'active'
       }
       
   ]; 
});