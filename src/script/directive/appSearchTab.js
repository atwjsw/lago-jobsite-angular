'use strict';

angular.module('app').directive('appSearchTab', ['dict', function(dict) {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'view/template/search-tab.html',
		scope: {
			tabList: '=',
			tabClick: '&'			
		},
		link: function($scope) {
			$scope.click = function (tab) {
				// console.log(tab.id);
				$scope.selectId = tab.id;
				$scope.tabClick(tab);

				// console.log(dict);
				// console.log(item.id);
				// console.log(dict[item.id]);
				// $scope.sheet = {};				
				// $scope.sheet.list = dict[item.id];
				// $scope.sheet.visible = true;
				// console.log($scope.sheet.visible);	
				// console.log($scope.sheet.list);							
			};
		}
	};
}]);