'use strict';

(function() {

  class MainController {

    constructor($http) {
      this.$http = $http;
      this.awesomeThings = [];
    }

    $onInit() {
      this.$http.get('/api/crawler')
        .then(response => {
          this.awesomeThings = response.data;
        });
    }
  }

  /*angular.module('webCrawlerApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });*/
})();
