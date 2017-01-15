$(function(){  

	
	$(window).resize(function (){  
		
		var w = $(window).width();  
		
		
			//events pg when resize window
			
		
			$(".what").css("paddingLeft", (w-990)/2);  
			$(".what").css("paddingRight", (w-990)/2);  
			
			
	}); 

});