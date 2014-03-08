(function (app, undefined) {
	
	'use strict';

	app.factory('Channel', [function () {

		var channels = [
			{ title: 'Channel 1', image: '', link: '#', select: false },
			{ title: 'Channel 2', image: '', link: '#', select: false },
			{ title: 'Channel 3', image: '', link: '#', select: false },
			{ title: 'Channel 4', image: '', link: '#', select: false },
			{ title: 'Channel 5', image: '', link: '#', select: false },
			{ title: 'Channel 6', image: '', link: '#', select: false },
			{ title: 'Channel 7', image: '', link: '#', select: false },
			{ title: 'Channel 8', image: '', link: '#', select: false }
		];

		return {
			query: function () {
				return channels;
			},
			remove: function (index) {
				channels.splice(index, 1);
			}
		};

	}]);

}(window.app));