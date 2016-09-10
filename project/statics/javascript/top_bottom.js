// JavaScript Document
$(document).ready(function() {
    $(".mis").mouseover(function() {
        var ulNode = $(".menu");
		if(ulNode.css("display")=="none"){
			ulNode.css("display","block");
		}
    });
	
	$(".search-top .top-in-1 ul li").mouseover(function () {
		if(!$(this).hasClass("mis")) {
			var ulNode = $(".menu");
			if(ulNode.css("display")=="block"){
				ulNode.css("display","none");
			}	
		}
	});
	$(".search-top .top-in-1 .middle").mouseover(function () {
			var ulNode = $(".menu");
			if(ulNode.css("display")=="block"){
				ulNode.css("display","none");
			}	
	});
	
	$(".menu").mouseleave(function () {
		var ulNode = $(".menu")
		if(ulNode.css("display")=="block"){
			ulNode.css("display","none");
		}	
	});
});