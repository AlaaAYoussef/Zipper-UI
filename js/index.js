$(document).ready(function(){

	$(window).scroll(function(){

		var x = $(this).scrollTop();

		if(x > 200)
		{
			$('.new-nav').slideDown();
		}
		else
		{
			$('.new-nav').slideUp();
		}

	});

	$('.list li a').click(function(){

		$('html').animate({

			scrollTop : $('#' + $(this).data('value')).offset().top
			

		},1500)


	})



})