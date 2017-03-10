'use strict';

angular.module('app').controller('mainCtrl', ['cache', '$scope', '$http', function(cache, $scope, $http){
	
	$http.get('/data/positionList.json').success(function(resp) {		
		$scope.list = resp;		
		
		// $scope.isFavorite = false;
		// if($scope.name) {
		// 	$scope.isFavorite = true;
		// }

	});

	$scope.name = cache.get('name') || '';
}]);