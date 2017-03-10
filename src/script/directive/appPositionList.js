'use strict';

angular.module('app').directive('appPositionList', ['$http', function($http) {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'view/template/position-list.html',
		// '='表示指令与控制器共享scope
		scope: {
			data: '=',
			filterObj: '=',
			isFavorite: '='			
		},
		link: function($scope) {
			// $scope.name = cache.get('name') || '';
			$scope.select = function($event, item) {				
				// console.log(item);
				// console.log($event);
				$event.stopPropagation();				
				$http.post('data/favorite.json', {
					id: item.id,
					select: !item.select
				}).success(function(resp) {
					item.select = !item.select;				
				});				
			};
		}
	};
}]);