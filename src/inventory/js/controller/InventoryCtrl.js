angular.module("cubicApp").controller("InventoryCtrl",['$scope','classListService','staticService','navBarService',function($scope,classListService,staticService,navBarService){
    staticService.header = "Inventory";
    navBarService.toggleSelection(6);
}]);