'use strict';
angular.module("webCrawlerApp").controller("MainController", ['$scope', 'MainService', function($scope, mainService){

  function init(){
    mainService.getLinks().then(function(res){
        console.log("Res : ", res);
    })
  }

  init();

}]);
