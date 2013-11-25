(function ($) {
	"use strict";

	$(function(){
		$(document)
		.on('mouseover', 'a[data-colorscheme]', function(e) {
			$('#colorscheme').attr('href',$(this).data('colorscheme')  );
		})
	});

})(window.jQuery);