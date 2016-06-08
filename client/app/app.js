'use strict';

angular.module('webCrawlerApp', ['ui.router'])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
