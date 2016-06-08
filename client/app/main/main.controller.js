'use strict';
angular.module("webCrawlerApp").controller("MainController", ['$scope', 'MainService', function($scope, mainService){
  $scope.fetchUrls = function(){
    mainService.getLinks($scope.initUrl).then(function(res){
      console.log("Res : ", res);
    })
  };

  function initScope(){
    $scope.initUrl = "http://www.python.org";
  }

  function init(){
    initScope();
    $scope.fetchUrls();
  }

  init();

}]);
