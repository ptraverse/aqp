var aqpApp = angular.module('aqpApp', ['timer']);


aqpApp.controller('IndexController', function ($scope) {
  $scope.fooVar1 = 'someValue';
  $scope.name = '';
  $scope.currentTime = Date.now();

  $scope.timerRunning = true;

  $scope.startTimer = function (){
    $scope.$broadcast('timer-start');
    $scope.timerRunning = true;
  };

  $scope.stopTimer = function (){
    $scope.$broadcast('timer-stop');
    $scope.timerRunning = false;
  };

  $scope.$on('timer-stopped', function (event, data){
    console.log('Timer Stopped - data = ', data);
  });

});

aqpApp.controller('StatsController', function ($scope) {
  $scope.fooVar2 = 'someOtherValue';
});


aqpApp.filter('capitalize', function() {
	return function(input) {
		return input.charAt(0).toUpperCase() + input.slice(1);
	};
});