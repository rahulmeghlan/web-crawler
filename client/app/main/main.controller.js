'use strict';
angular.module("webCrawlerApp").controller("MainController", ['$scope', 'MainService', function($scope, mainService){
  var index = 0,
  subIndex = 0,
  validUrlPattern = new RegExp(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/);
  /**
  * Used to validate the entered url and crawl for links in it.
  */
  $scope.validateAndCrawl = function(){
    //$scope.newSearch = true;
    if(validUrlPattern.test($scope.crawlUrl)){
      mainService.getLinks($scope.crawlUrl).then(function(res){
        if(res.data.success){
          if(index < parseInt($scope.maxDepth)){
            $scope.resultsTables.push(index);
            $scope.absUrls[index] = res.data.success.absUrls
            $scope.crawlUrl = $scope.absUrls[subIndex][index];
            $scope.crawledUrls.push($scope.crawlUrl);
            $scope.validateAndCrawl();
            index++;
          }else{
            // $scope.crawlUrl = "";
            // $scope.crawledUrls.splice($scope.crawledUrls.length-1, 1);
            $scope.searchInProgress = false;
          }
        }else{
          alert("Sorry, no links found.")
        }
      })
    }else{
      alert("Enter a valid url !");
    }
  };

  /**
  * @description : This function is used to search a custom url
  */
  $scope.resetSearch = function(){
    //$scope.newSearch = false;
    index = 0;
    subIndex = 0;
    $scope.absUrls = {};
    $scope.resultsTables = [];
    $scope.crawledUrls = [$scope.crawlUrl];
    $scope.validateAndCrawl();
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
    $scope.searchInProgress = true;
    $scope.crawlUrl = "http://www.python.org";
    $scope.crawledUrls = [$scope.crawlUrl];
    $scope.maxDepth = 3;
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
