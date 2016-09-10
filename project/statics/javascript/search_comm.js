// JavaScript Document


window.onload = function () {

};

	$(function(){
			
				status_timer=window.setTimeout("status_scroll()",5000);	
			})
			
			var status_timer;
			function status_scroll(){
				$(".voice ul").animate({top:"-19px"},1000,function(){
					$(".voice li:first").appendTo(".voice ul");
					$(".voice ul").css("top","0");
				});
				status_timer=window.setTimeout("status_scroll()",5000);//轮换速度
			}

$(document).ready(function() {
    $(".right-1").click(function() {
        var ulNode = $(".list-b")
		if(ulNode.css("display")=="none"){
			ulNode.css("display","block");
			$(".right-1").html("<a>收起<img src='../statics/images/search_comm/ics-1.gif'/></a>");
		}else{
			ulNode.css("display","none");
			$(".right-1 a").text("更多");
		}
    });
});