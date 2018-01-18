(function(){

	'use strict';
	var window_height = $(window).height(),
       content_height = window_height - 30;

    $('.backimg').height(content_height);

    $(".words").mouseover(function() {
	  $( "a" ).effect( "shake", "fast" );
	});

 });