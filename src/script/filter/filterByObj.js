'use strict';

angular.module('app').filter('filterByObj', [function() {
	return function (list, obj) {
		var result = [];
		angular.forEach(list, function(item) {
			var isMatched = true;			
			for (var e in obj) {
				if (item[e] !== obj[e]) {
					isMatched = false;
				}
			}
			if(isMatched) {
				result.push(item);
			}
		});
		return result;
	};
}]);