var showHeader = function(i) {
	$("header h2:nth-child(" + i + ")").removeClass("hidden");
	$("header h2:nth-child(" + i + ")").addClass("in");
	if(i < 6)
	{
		window.setTimeout(function () {
			$("header h2:nth-child(" + i + ")").removeClass("in");
			$("header h2:nth-child(" + i + ")").addClass("out");
		    $("header h2:nth-child(" + i + ")").addClass("hidden");
		    showHeader(i + 1);
		}, 1500);
	}
	else
	{
		$('h1').addClass('top-border');
	}
}

$(document).ready(function() {
	window.setTimeout(function() {
		showHeader(2);
	}, 1500);
	window.setTimeout(function () {
	    $("#me").addClass("in");
	}, 9000);
	window.setTimeout(function () {
	    $("#myself").addClass("in");
	}, 12000);
	window.setTimeout(function () {
	    $("#us").addClass("in");
	}, 15000);
	//$("header h2:nth-child(2)").removeClass("in")
})