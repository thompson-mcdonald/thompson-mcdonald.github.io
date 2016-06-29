var $ = require('jquery');

require('jquery-ui');

$(document).ready(function(){
	$('.collage-area img').each(function(){
		$(this).addClass('pos-absolute');
		$(this).css({
			"left": (Math.random() * 80 + "%"),
			"top": (Math.random() * 80 + "%"),
			"right": (Math.random() * 80 + "%"),
			"bottom": (Math.random() * 80 + "%")
		})
		$(this).draggable({
			drag: function(){
				$(this).addClass('z-index-mid').siblings().removeClass('z-index-mid');
			}
		});
	});
});
