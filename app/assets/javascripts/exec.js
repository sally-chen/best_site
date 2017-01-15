$(function(){
	$(".exec_box").hover(function(){
		
		$(this).find(".exec_label").stop().animate({height:"260px",background:"linear-gradient(to bottom, rgba(20,20,20,1), rgba(20,20,20,1) )"},800);
		$(this).find(".exec_label").css("background","rgba(20,20,20,0.8)");
		$(this).find(".exec_label").find(".exec_p1").hide(0,function(){});
		$(this).find(".exec_label").find(".exec_p2").show(300,function(){});
	},function(){
		
		$(this).find(".exec_label").stop().animate({height:"100px"},200);
		$(this).find(".exec_label").find(".exec_p1").show(0,function(){});
		$(this).find(".exec_label").find(".exec_p2").hide(0,function(){});
		$(this).find(".exec_label").css("background","linear-gradient(to bottom, rgba(20,20,20,0.0), rgba(20,20,20,1)");
	});
	
});