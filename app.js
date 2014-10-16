var showHeader = function(i) {

	$("header h2:nth-child(" + i + ")").addClass("in");
	$("header h2:nth-child(" + i + ")").removeClass("hidden");
	if(i < 6)
	{
		window.setTimeout(function () {
			$("header h2:nth-child(" + i + ")").addClass("out");
		    window.setTimeout(function() {
		    	$("header h2:nth-child(" + i + ")").addClass("hidden");
		    	showHeader(i + 1);
		    }, 1200);
		    
		}, 1500);
	}
	else
	{
		$('h1').addClass('top-border');
	}
}


var showSubHeader = function(i) {
	window.setTimeout(function() {
		$('header').append('<h2 class="text-primary">' + subHeaders[i] + '</h2>');
		$('header h2').hide().fadeIn(1000);
		window.setTimeout(function() {
			$('header h2').fadeOut(1000);
			showSubHeader(i + 1);
			window.setTimeout(function() {
				$('header h2').remove();		
			}, 1000);
		}, 1000);
	}, 1000);
}
var subHeaders = ["tomorrow's web is", "usable,", "responsive,", "and simple,", "let's get started"];
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
		$('h1').addClass('top-border');
		$('header').append("<h2 class='text-primary'>let's get started</h2>");
		$('header h2').hide().fadeIn(1000);
	}, 9000);
	//showSubHeader(0);
	//window.setTimeout(function() {
	//	showSubHeader(1);
	//}, 4000);

	window.setTimeout(function () {
	    $("#me").addClass("in");
	}, 12000);
	window.setTimeout(function () {
	    $("#myself").addClass("in");
	}, 15000);
	window.setTimeout(function () {
	    $("#us").addClass("in");
	}, 18000);
	//$("header h2:nth-child(2)").removeClass("in")
})