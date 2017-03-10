'use strict';

angular.module('app').controller('searchCtrl', ['$scope', '$http', 'dict', function($scope, $http, dict) {
	$http.get('/data/positionList.json').success(function(resp) {		
		$scope.list = resp;
	});
	// $scope.sheet = {};
	// $scope.sheet.list = dict.city;
	$scope.tabList = [
		{
			id:'city',
			name: '城市'
		},
		{
			id:'salary',
			name: '薪资'
		},
		{
			id:'scale',
			name: '公司规模'
		}
	];
	$scope.sheet = {};	
	var tabId = '';
	$scope.tClick = function (id, name) {
		tabId = id;							
		$scope.sheet.list = dict[id];
		$scope.sheet.visible = true;
	};
	$scope.filterObj = {};
	$scope.sClick = function (id, name) {
		console.log(id, name);
		if(id) {
			angular.forEach($scope.tabList, function(item) {
				if(item.id === tabId) {		
					item.name = name;
				}
			});
			$scope.filterObj[tabId +'Id'] = id;
		} else {
			delete $scope.filterObj[tabId +'Id'];
			angular.forEach($scope.tabList, function(item) {
				if(item.id === tabId) {
					switch (item.id) {
						case 'city':
							item.name = '城市';
							break;
						case 'salary':
							item.name = '薪资';
							break;
						case 'scale':
							item.name = '公司规模';
							break;
						default:
					}
				}
			});
		}		
	};



}]);