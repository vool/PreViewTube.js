/*
 *	PreViewTube, A small jQuery plugin for animating YouTube thumbnails.
 *	Instructions: http://previewtube.vool.ie/
 *	Source: https://github.com/vool/PreViewTube.js
 *	By: Keith o'Faolain', http://vool.ie
 *	Version: 1.0
 *	Updated: March 21st, 2012
 * 
 *  Released under the MIT license.
 *
 */

(function($) {

	$.fn.PreViewTube = function(opts) {

		//Defaults
		var settings = $.extend({
			'interval' : 500,
			'mode' : 'hover'
		}, opts);

		//Iterate over matched elements
		return this.each(function() {

			var $this = $(this);

			var loop;

			// get the image source
			var imgSrc = $this.attr("src");
			// get the image filename
			var fileName = imgSrc.match(/(\w*)\.jpg$/);

			// get the imgae number
			if(fileName[1] == 'default') {
				// if default set to 1
				var num = 1;
			} else {
				var num = parseInt(fileName[1]);
			}

			// declare the loop
			var infiniteLoop = null;

			// check for mode [ hover || constant ]
			if(settings.mode == 'constant') {

				loop = setInterval(function() {
					// loop - one, two, trí
					if(num == 3) {
						num = 0;
					} else {
						num++;
					}
					// set the image source on the element
					$this.attr("src", imgSrc.replace(/(\d\.jpg|\w*\.jpg)$/, +num + '.jpg'));

				}, settings.interval);
				// interval/delay loop

			} else {// hover mode

				$this.hover(function() {

					loop = setInterval(function() {
						// loop - one, two, trí
						if(num == 3) {
							num = 1;
						} else {
							num++;
						}
						// set the image source on the element
						$this.attr("src", imgSrc.replace(/(\d\.jpg|\w*\.jpg)$/, +num + '.jpg'));

					}, settings.interval);

				}, function() {// mouse out
					// stop loop
					clearInterval(loop);

				});
			}

		});
	};
})(jQuery);
