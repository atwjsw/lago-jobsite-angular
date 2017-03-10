'use strict';

angular.module('app').directive('appHeadBar', [function() {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'view/template/head-bar.html',
		scope: {
			text: "@"
		},
		link: function (scope) {
			scope.back = function() {
				window.history.back();
			};
		}
	};
}]);