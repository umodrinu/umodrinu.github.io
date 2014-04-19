'use strict';

var umodrinuApp = angular.module('umodrinuApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]);

umodrinuApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/mapa', {
        templateUrl: 'views/mapa.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
