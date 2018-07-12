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

		function mailValidate() {
			var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
			
			var mail = $('#mail');
			
			 
			05.
			mail.blur(function(){
			06.
			if(mail.val() != ''){
			07.
			if(mail.val().search(pattern) == 0){
			08.
			$('#valid').text('Подходит');
			09.
			$('#submit').attr('disabled', false);
			10.
			mail.removeClass('error').addClass('ok');
			11.
			}else{
			12.
			$('#valid').text('Не подходит');
			13.
			$('#submit').attr('disabled', true);
			14.
			mail.addClass('ok');
			15.
			}
			16.
			}else{
			17.
			$('#valid').text('Поле e-mail не должно быть пустым!');
			18.
			mail.addClass('error');
			19.
			$('#submit').attr('disabled', true);
			20.
			}
			21.
			});
		}

	});	  
/*----------------------
---WINDOW ON LOAD END---
----------------------*/
})();

