'use strict';

umodrinuApp.controller('NavbarCtrl', ['$scope', '$route', function ($scope, $route) {
    console.log($route.current.templateUrl);
  }]);