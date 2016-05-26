"use strict";

var self = module.exports = {

	init: function () {

		Homey.manager('speech-input').on('speech', function (speech, callback) {
			Homey.log('onSpeech', speech);

			speech.triggers.forEach(function (trigger) {

				if (trigger.id === 'youthere') {
					// Pick a the correct string
					var str=__("iamthere");

					// Create array with delimiter as ';'
					var arr_t = str.toString().split(';');

					// Pick a random value
					var randval=arr_t[Math.floor(Math.random()*(arr_t.length))];

					// Say output
					Homey.manager('speech-output').say( randval );

					// null, true when speech was meant for this app
					// true, null when speech wasn't meant for this app
					callback(null, true);
				}
			});
		});
	}
};


