describe("Test for testCtrl",function(){
    
    beforeEach(angular.mock.module('cubicApp'));

	var $controller;
    var $scope;
    
	beforeEach(angular.mock.inject(function(_$controller_){
	  $controller = _$controller_;
      $scope = {};
      var controller = $controller('testCtrl', { $scope: $scope });
	}));
    
    it('has sampleText initialized', function() {
      
     
      expect($scope.sampleText).toEqual('Hello World');
    });
    
    it('add should return ',function(){
        expect($scope.add()).toEqual(7);
    });
    
    it("multiply should return",function(){
        expect($scope.multiply()).toEqual(12);
    })
 
});