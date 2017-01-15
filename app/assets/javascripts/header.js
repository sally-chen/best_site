$(function(){
	$(".head ul li").hover(function(){

		$(this).css({background:"rgba(125,91,151,0.7)",borderBottom:"3px solid #511f77",height:"72px",lineHeight:"72px"});
		$(this).find("a").css("color","white");
	},function(){
		$(this).css({background:"none",border:"none",height:"50px",lineHeight:"50px"});
		$(this).find("a").css("color","#b89acf");
		
	});
	
});
