$(document).ready(function() {

	var searchBarPosition = $(".topbar").offset().top;
	$(window).scroll(function() {
  		var currentScroll = $(window).scrollTop();
  		console.log(currentScroll);
  
	  	if (currentScroll < searchBarPosition) {
	    	console.log("hello");
	    	$(".topbar").removeClass("topbar-fixed");
	  	} else {
	    	$(".topbar").addClass("topbar-fixed");
	  	}
	});

	$(".gallery-grid a.image").click(function() {
		$(".overlay").show();
		
		var image = $(this).find("img");
		var image_source = image.attr("src");
		
		var image_width = image.prop("naturalWidth");
		var image_height = image.prop("naturalHeight");

		var image_alt = image.attr("alt");	
		var image_alt = $(this).find(".gallery-item-alt").html();

		if (image_width > image_height) {
			$(".display").attr("width", "960px");
			$(".display").attr("height", "auto");
		} else {
			$(".display").attr("height", "650px");
			$(".display").attr("width", "auto");
		}

		$(".pic-info").html(image_alt);

		$(".display").attr("src", image_source);
	});

	$(".gallery-grid a.video").click(function() {
		$(".overlay").show();
		var video_content = $(this).find(".video-content").html();

		var image_alt = $(this).find(".gallery-item-alt").html();

		$(".pic-info").html(image_alt);
		$(".video-display").html(video_content);
	});




	$(".overlay").click(function() {
		$(".overlay").hide();
		$(".display").attr("src", "");
		$(".display").attr("width","");
		$(".display").attr("height","");
		$(".video-display").html("");
	});

	$(".overlay-view").click( function (event) {
		event.stopPropagation(); 
	});

	$(".gallery-grid li").mouseover(function() {
		$(this).find(".hover-overlay").show();
	});

	$(".gallery-grid li").mouseout(function() {
		$(this).find(".hover-overlay").hide();
	});

});

