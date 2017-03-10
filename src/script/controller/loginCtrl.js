'use strict';

angular.module('app').controller('loginCtrl', ['$scope', '$http', '$state', 'cache', function($scope, $http, $state, cache){
	$scope.submit = function() {
		console.log($scope.user);
		$http.post('data/login.json', $scope.user).success(function(resp) {
			// console.log(resp);
			cache.put('id', resp.id);
			cache.put('name', resp.name);
			cache.put('image', resp.image);
			$state.go('main');
		});
	};	
}]);