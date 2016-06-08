'use strict';
angular.module("webCrawlerApp").controller("MainController", ['$scope', 'MainService', function($scope, mainService){


  $scope.validateAndCrawl = function(){
    mainService.getLinks($scope.crawlUrl).then(function(res){
      console.log("Res : ", res);
      $scope.absUrls = res.data.success.absUrls;
    })
  };

  function initScope(){
    $scope.crawlUrl = "http://www.python.org";
    $scope.isValidUrl = "/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/";
  }

  function init(){
    initScope();
  }

  init();

}]);
