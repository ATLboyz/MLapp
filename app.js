var app = angular.module('app', ['ui.router', 'ngAudio']);
  app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('main', {
        url: "/",
        templateUrl: "views/main.html"
      })
  });
  app.controller('indexController', function($scope){
    // random shit here if need be
  });