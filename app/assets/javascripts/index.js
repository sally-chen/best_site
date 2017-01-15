//scroll down and hide home
$(function(){
    var about_height = $(".join").offset().top;

    $(window).scroll(function(){
        var this_scrollTop = $(this).scrollTop();
        if(this_scrollTop>about_height ){
			  $(".home_cover").show();  
            $(".home_cover").stop().animate({opacity:"0.9"},500);
         
        }else{
			
			 $(".home_cover").stop().animate({opacity:"0.0"},500);
			$(".home_cover").hide();  
		}
    });
});

//resize window
$(function(){  

	
	$(window).resize(function (){  
		var h = $(window).height();  
		var w = $(window).width();  
		var h_old = 580;  
		//home pg when resize window
			if (h < h_old) {  
				$(".home").css("height", h);  
				$(".home_body").css("margin-top", 100- (h_old - h));  
				
			} else {  
				$(".home").css("height", 580);  
			}  
			//events pg when resize window
			
			
			
	}); 

});
//nav home pg hover effect
$(function(){
	$(".nav ul li").hover(function(){

		$(this).css({background:"rgba(125,91,151,0.7)",borderTop:"3px solid #511f77",height:"72px",lineHeight:"75px"});
		$(this).find("a").css("color","white");
	},function(){
		$(this).css({background:"none",border:"none",lineHeight:"80px"});
		$(this).find("a").css("color","#7d5b97");
		
	});
	
});


	
	
//events picture	
$(function(){
	$(".mentor").hover(function(){
		//bgColor = $(this).css("background-color");
		//$(".mentor_cover").css("visibility","visible");

		$(".mentor_cover").stop().animate({opacity:"0.9"},800);
	
	},function(){
		//$(".mentor_cover").css("visibility","hidden");
		$(".mentor_cover").stop().animate({opacity:"0.0"},300);
	});
	
});

$(function(){
	$(".comp").hover(function(){
		
		$(".comp_cover").stop().animate({opacity:"0.9"},800);
	
	},function(){
		
		$(".comp_cover").stop().animate({opacity:"0.0"},300);
	});
	
});
$(function(){
	$(".event_right").hover(function(){
		
		$(".prof_cover").stop().animate({opacity:"0.9"},800);
	
	},function(){
		
		$(".prof_cover").stop().animate({opacity:"0.0"},300);
	});
	
});

