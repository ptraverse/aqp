var aqpApp = angular.module('aqpApp', ['timer']);

aqpApp.controller('ScratchController', function ($scope) {
	$scope.fooVar1 = 'fooVal1';
	$scope.name = '';
	$scope.currentTime = '';

	$scope.timerRunning = true;

	$scope.startTimer = function (){
		$scope.$broadcast('timer-start');
		$scope.timerRunning = true;
	};

	$scope.stopTimer = function (){
		$scope.$broadcast('timer-stop');
		$scope.timerRunning = false;
	};

	$scope.resetTimer = function(){
		$scope.$broadcast('timer-reset');
		$scope.timerRunning = false;
	};

	$scope.$on('timer-stopped', function (event, data){
		console.log('Timer Stopped - data = ', data);
	});

});

aqpApp.filter('capitalize', function() {
    return function(input) {
		return input.charAt(0).toUpperCase() + input.slice(1);
	};
});