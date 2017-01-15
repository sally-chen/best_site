//footer
$(function(){
	$(".footer_resources ul li a").css("color","#c0c0c0");  
	
});

//resize window
$(function(){  

	
	$(window).resize(function (){  
		
		var w = $(window).width();  
		
		
			//events pg when resize window
			
			$(".footer_resources").css("marginLeft", w/10);  
			$(".footer").css("paddingLeft", (w-750-w/10)/2);  
			$(".footer").css("paddingRight", (w-750-w/10)/2);  
			
			
	}); 

});