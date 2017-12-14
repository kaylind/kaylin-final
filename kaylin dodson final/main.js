$(document).ready(function(){

// all code goes in here

	$("blockquote").mouseenter(function(){
	    $("blockquote").css("color", "#b26800");
	});

		$("blockquote").mouseout(function(){
	    $("blockquote").css("color", "#ffdaa3");
	});

  $('.carousel.carousel-slider').carousel({fullWidth: true});
  
// Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();

}); //ends doc ready