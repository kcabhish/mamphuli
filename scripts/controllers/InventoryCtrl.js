angular.module("cubicApp").controller("InventoryCtrl",['$scope','classListService','staticService',function($scope,classListService,staticService){
    staticService.header = "Inventory";
}]);