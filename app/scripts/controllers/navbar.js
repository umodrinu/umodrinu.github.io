'use strict';

umodrinuApp.controller('NavbarCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.getActive = function(path) {
	    if ($location.path().substr(0, path.length) == path) {
	      return "active"
	    } else {
	      return ""
	    }
	}	
}]);