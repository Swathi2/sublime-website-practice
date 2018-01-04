'use strict';
angular.module('sublimeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
])
.config(function ($routeProvider, $httpProvider) {
    $routeProvider
    .when('/download', {
        templateUrl: 'views/download.html',
        controller: "downloadCtrl",
        controllerAs: "download"
    })
    .when('/home', {
            templateUrl: 'views/home.html',
            controller: "homeCtrl",
            controllerAs: "home"
     })
      .when('/buy', {
             templateUrl: 'views/buy.html',
             controller: "buyCtrl",
             controllerAs: "buy"
      })
      .when('/news', {
            templateUrl: 'views/news.html',
            controller: 'newsCtrl',
            controllerAs:"news"
      })
      .when('/forum', {
             templateUrl: 'views/forum.html',
             controller: "forumCtrl",
             controllerAs: "forum"
      })
      .when('/support', {
             templateUrl: 'views/support.html',
             controller: "supportCtrl",
             controllerAs: "support"
       })
     .otherwise({
         redirectTo: '/home'
     })
})