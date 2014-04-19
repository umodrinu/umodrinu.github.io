'use strict';

var umodrinuApp = angular.module('umodrinuApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate'
]);

umodrinuApp.config(function ($routeProvider) {
    $routeProvider
      .when('/uvod', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/dokumenty', {
        templateUrl: 'views/dokumenty.html',
        controller: 'MainCtrl'
      })
      .when('/mapa', {
        templateUrl: 'views/mapa.html',
        controller: 'MainCtrl'
      })
      .when('/kontakt', {
        templateUrl: 'views/kontakt.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/uvod'
      });
  });
