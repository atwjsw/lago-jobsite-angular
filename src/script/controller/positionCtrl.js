'use strict';

angular.module('app')
	.controller('positionCtrl', ['$log', '$scope', '$http', '$state', 'cache', function($log, $scope, $http, $state, cache) {
		// cache.remove('to');
		// cache.remove('from');
		// $scope.isLogin = false;
		$scope.isLogin = !!cache.get('name');
		$scope.message = $scope.isLogin?'投个简历':'去登录';
		$scope.isActive = false;
		$http.get('data/position.json?id='+ $state.params.id).success(function(resp) {
			$scope.position = resp;
			if(resp.posted) {
				$scope.message = '已投递';
			}
			$http.get('data/company.json?id='+ $scope.position.companyId).success(function(resp) {
				$scope.company = resp;
			});
		});

		$scope.go = function () {
			if($scope.isLogin && $scope.message !== '已投递') {
				$http.post('data/handle.json', {
					id: $scope.position.id
				}).success(function(resp) {
					$log.info(resp);
					$scope.message = '已投递';
				});
			} else {
				$state.go('login');
			}
		};
		
}]);