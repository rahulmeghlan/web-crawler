angular.module("webCrawlerApp").service("MainService", ["$http", function($http){
  var self = this;
  /**
  * @description : Make BE call to fetch urls
  */
  self.getLinks = function(url){
    return $http.get("/api/crawler", {
      params: {url: url}
    })
  }

}]);
