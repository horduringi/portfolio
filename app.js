$(document).ready(function() {
	window.setTimeout(function() {
		$('header h2').remove();
		$('header').append("<h2 class='text-danger'>web developer</h2>");
		$('header h2').hide().fadeIn(1000);
	}, 1000);

	window.setTimeout(function () {
	    $("#me").addClass("in");
	}, 2500);
	window.setTimeout(function () {
	    $("#myself").addClass("in");
	}, 2500);
	window.setTimeout(function () {
	    $("#us").addClass("in");
	}, 2500);

	window.setTimeout(function () {
	    $("#scroll-chevron-down").addClass("in");
	}, 2500);

	$('#scroll-chevron-down').on('click', function(){
		$("html, body").animate(
	      {scrollTop: $("#screen-below").offset().top}
	    , 500)

	})
	$('#scroll-chevron-up').on('click', function(){
		$("html, body").animate(
	      {scrollTop: $("body").offset().top}
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