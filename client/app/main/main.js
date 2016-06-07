'use strict';

angular.module('webCrawlerApp')
  .config(function($stateProvider) {
    $stateProvider.state('main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController'
    });
  });
