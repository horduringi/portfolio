$(document).ready(function() {
	window.setTimeout(function() {
		$('header').append("<h2 class='text-primary'>tomorrow's web is</h2>");
		$('header h2').hide().fadeIn(1000);
		window.setTimeout(function(){
			$('header h2').fadeOut(1000);
		}, 1000);
	}, 1000);
	window.setTimeout(function() {
		$('header h2').remove();
		$('header').append("<h2 class='text-primary'>usable,</h2>");
		$('header h2').hide().fadeIn(1000);
		window.setTimeout(function(){
			$('header h2').fadeOut(1000);
		}, 1000);
	}, 3000);
	window.setTimeout(function() {
		$('header h2').remove();
		$('header').append("<h2 class='text-primary'>responsive,</h2>");
		$('header h2').hide().fadeIn(1000);
		window.setTimeout(function(){
			$('header h2').fadeOut(1000);
		}, 1000);
	}, 5000);
	window.setTimeout(function() {
		$('header h2').remove();
		$('header').append("<h2 class='text-primary'>and simple,</h2>");
		$('header h2').hide().fadeIn(1000);
		window.setTimeout(function(){
			$('header h2').fadeOut(1000);
		}, 1000);
	}, 7000);
	window.setTimeout(function() {
		$('header h2').remove();
		$('header').append("<h2 class='text-primary'>let's get started</h2>");
		$('header h2').hide().fadeIn(1000);
	}, 9000);


	window.setTimeout(function () {
	    $("#me").addClass("in");
	}, 12000);
	window.setTimeout(function () {
	    $("#myself").addClass("in");
	}, 12000);
	window.setTimeout(function () {
	    $("#us").addClass("in");
	}, 12000);

	window.setTimeout(function () {
	    $("#scroll-chevron-down").addClass("in");
	}, 12000);

	$('#scroll-chevron-down').on('click', function(){
		$("html, body").animate(
	      {scrollTop: $("#screen-below").offset().top}
	    , 500)

	})

	$('#all').on('click', function() {
		$('#all').addClass("active");
		$('#favorite').removeClass("active");
		$('.regular').slideDown().addClass("in");
	})
	$('#favorite').on('click', function() {
		$('#favorite').addClass("active");
		$('#all').removeClass("active");
		$('.regular').slideUp().removeClass("in");
	})
})