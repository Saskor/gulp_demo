(function () {
	$(function() {

		pixelPerfect();
		scrollNav();
		dropdown('main__catalog-filter', 'main__catalog-filter-list');
		dropdown('main__order-filter', 'main__order-filter-list');
		
		function pixelPerfect() {
			var clickvar = $('.click');
			var bg = $('.bg');
			clickvar.click(function () {
				
				bg.toggle();
	      
	    });

	  }

	  function scrollNav() {
		  $(".to-top-page").click(function () {
		  	event.preventDefault();
			  $("html, body").animate({scrollTop: 0}, 300);
			});
		}

		function dropdown(parentNode, list) {
			parentNode = '.' + parentNode;
			list = '.' + list;
			var span = $(parentNode + ' span');
			console.log(span);

			$(parentNode).click(function (e) {
				
				if(e.target.tagName == 'LI') {
					span.text($(e.target).text());
				}
			  $(list).toggleClass("nodisplay");
			});

			$(list).click(function () {
				// console.log(event.target.prop("tagName"));
			});


		}

	});	  
/*----------------------
---WINDOW ON LOAD END---
----------------------*/
})();

