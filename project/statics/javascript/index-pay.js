/**
 * Created by maker on 2016/6/22.
 */
$(document).ready(function(){
    $(".boun>a").click(function(){
        var ulNode = $(this).next("ul");
        if(ulNode.css("display")=="none"){
            ulNode.css("display","block")
            $(".jia",this).html("<span>-</span>");
        }else{
            ulNode.css("display","none")
            $(".jia",this).html("<span>+</span>");
        }
        //ulNode.slideToggle()
    });
});
