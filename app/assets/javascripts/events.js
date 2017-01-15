$(function(){  
	
	
	$(window).resize(function (){  
		var h = $(window).height();  
		var w = $(window).width();  
		
	
			//events pg when resize window
			$(".event_each").css("padding-left", (w-900)/2);  
			$(".event_each").css("padding-right", (w-900)/2);  
			
			
	}); 

});