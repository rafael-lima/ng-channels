(function (app, undefined) {

	'use strict';

	app.controller('ChannelCtrl',
		['$scope', 'Channel', function ($scope, Channel) {
	
		$scope.channels = Channel.query();

		$scope.deleteItem = function (index) {
			Channel.remove(index);
		};

	}]);

}(window.app));