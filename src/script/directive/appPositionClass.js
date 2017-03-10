'use strict';

angular.module('app').directive('appPositionClass', [function() {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'view/template/position-class.html',
		scope: {
			com: '='					
		},
		link: function($scope) {
			$scope.showPositionList = function(idx) {
				$scope.selectedPosList =  $scope.com.positionClass[idx].positionList;
				$scope.isActive = idx;
			};
			// $scope.showPositionList(0);
			$scope.$watch('com', function(newVal) {
				if(newVal) {
					$scope.showPositionList(0);
				}
			});			
		}
	};
}]);