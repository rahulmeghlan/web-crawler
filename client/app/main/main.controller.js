'use strict';
angular.module("webCrawlerApp").controller("MainController", ['$scope', 'MainService', function($scope, mainService){
  var index = 0,
  subIndex = 0;
  /**
  * Used to validate the entered url and crawl for links in it.
  */
  $scope.validateAndCrawl = function(){
    //$scope.newSearch = true;
    mainService.getLinks($scope.crawlUrl).then(function(res){
    if(index < 3){
      $scope.resultsTables.push(index);
      $scope.absUrls[index] = res.data.success.absUrls
      $scope.crawlUrl = $scope.absUrls[subIndex][index];
      $scope.crawledUrls.push($scope.crawlUrl);
      $scope.validateAndCrawl();
      //$scope.newSearch = false;
      index++;
    }
  })
};
/**
* @description : This function is used to search a custom url
*/
$scope.resetSearch = function(){
  $scope.crawlUrl = "";
  //$scope.newSearch = false;
  $scope.absUrls = {};
  $scope.resultsTables = [];
};

/**
* @description : This function is used to bind events on this controller
*/
function bindEvents(){
}
/**
* @description : This function is used to init scope for this controller
*/
function initScope(){
  $scope.newSearch = false;
  $scope.absUrls = {};
  $scope.resultsTables = [];
  $scope.crawlUrl = "http://www.python.org";
  $scope.crawledUrls = [$scope.crawlUrl];
  $scope.isValidUrl = "/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/";
  $scope.validateAndCrawl();
}
/**
* @description : This function is used to initialize all required inner functions of the controller
*/
function init(){
  initScope();
  bindEvents();
}

/**
* call internal function init to initialize the controller functions
*/
init();

}]);
