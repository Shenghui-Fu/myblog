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

$(function(){

    $(".star li").mouseenter(function(){
        $(".star li").css("background","url('../statics/images/ly-7.png') no-repeat -203px -123px");
        $(this).css("background","url('../statics/images/ly-7.png') no-repeat -203px -123px");
        $(this).nextAll().css("background",'url("../statics/images/ly-7.png") no-repeat -203px -186px');
        var score = 2*($(".star li").length-$(this).nextAll().length);
        $("#src").empty();
        $("#src").append(score);
    })
});