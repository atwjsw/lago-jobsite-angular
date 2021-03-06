'use strict';

angular.module('app').controller('postCtrl', ['$scope', '$http', function($scope, $http){
	$scope.tabList = [
		{
			id: 'all',
			name: '全部'
		}, {
			id: 'pass',
			name: '面试邀请'
		}, {
			id: 'fail',
			name: '不合适'
		}
	];

	$http.get('data/myPost.json').success(function(resp) { 
		// console.log(resp);
		$scope.myPost = resp;
	});
	$scope.filterObj = {};
	
	$scope.tClick = function(id, name) {
		// console.log(id);
		switch (id) {
			case 'all':
				delete $scope.filterObj.state;
				break;
			case 'pass':
				$scope.filterObj.state = '1';
				break;
			case 'fail':
				$scope.filterObj.state = '-1';
				break;
			default:
		}
	};

}]);