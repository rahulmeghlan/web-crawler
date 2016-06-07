'use strict';

angular.module('webCrawlerApp', ['webCrawlerApp.constants', 'ngCookies', 'ngResource', 'ngSanitize',
    'ui.router', 'ui.bootstrap'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
