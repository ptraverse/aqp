var aqpApp = angular.module('aqpApp', []);

aqpApp.controller('IndexCtrl', function ($scope) {
  $scope.fooVar1 = 'someValue';
  $scope.name = '';
  $scope.currentTime = Date.now();
});


aqpApp.filter('capitalize', function() {
	return function(input) {
		return input.charAt(0).toUpperCase() + input.slice(1);
	};
});