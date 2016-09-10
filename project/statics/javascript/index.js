/**
 * Created by maker on 2016/6/18.
 */

$(function () {
    $(".sinceMedia li").hover(function(){
        $(this).addClass("name-list-p").siblings().removeClass("name-list-p");
    });
    $(".marketingNews li").hover(function(){
        $(this).addClass("name-list-p").siblings().removeClass("name-list-p");
    });
    $(".mouthMarket li").hover(function(){
        $(this).addClass("name-list-p").siblings().removeClass("name-list-p");
    });
    $(".product li").hover(function(){
        $(this).addClass("name-list-p").siblings().removeClass("name-list-p");
    });
    $(".searchMarketing li").hover(function(){
        $(this).addClass("name-list-p").siblings().removeClass("name-list-p");
    });

	var mainChange = function (main_id) {

		if($("."+main_id).hasClass("display-none")) {

			$(".index-main").addClass("display-none");

			$("."+main_id).removeClass("display-none");
		}

	}

    $(".nav li a").hover(function(){

		if(!$(this).hasClass("on")){

			$(".nav li a").removeClass("on");

			$(this).addClass("on");
		}

		var main_id = $(this).attr("data-id");

		mainChange(main_id);
		
    },function () {return false;});

    var mainValue = function (main_id) {
        if($("."+main_id).hasClass("display-none")) {

            $(".main-change").addClass("display-none");

            $("."+main_id).removeClass("display-none");
        }

    }

    $(".searchMarketing li a").hover(function(){
        if(!$(this).hasClass("on")){

            $(".searchMarketing li a").removeClass("on");

            $(this).addClass("on");
        }
        var main_id = $(this).attr("data-id");

        mainValue(main_id);

    },function () {return false;});

    var mainNews = function (main_id) {

        if($("."+main_id).hasClass("display-none")) {

            $(".main-news ").addClass("display-none");

            $("."+main_id).removeClass("display-none");
        }

    }

    $(".marketingNews li a").hover(function(){

        if(!$(this).hasClass("on")){

            $(".marketingNews li a").removeClass("on");

            $(this).addClass("on");
        }

        var main_id = $(this).attr("data-id");

        mainNews(main_id);

    },function () {return false;});

    var mainMedia = function (main_id) {

        if($("."+main_id).hasClass("display-none")) {

            $(".mainMedia ").addClass("display-none");

            $("."+main_id).removeClass("display-none");
        }

    }
    $(".sinceMedia li a").hover(function(){

        if(!$(this).hasClass("on")){

            $(".sinceMedia li a").removeClass("on");

            $(this).addClass("on");
        }

        var main_id = $(this).attr("data-id");

        mainMedia(main_id);

    },function () {return false;});

    var mainMouth= function (main_id) {

        if($("."+main_id).hasClass("display-none")) {

            $(".mouthMarketing ").addClass("display-none");

            $("."+main_id).removeClass("display-none");
        }

    }

    $(".mouthMarket li a").hover(function(){

        if(!$(this).hasClass("on")){

            $(".mouthMarket li a").removeClass("on");

            $(this).addClass("on");
        }

        var main_id = $(this).attr("data-id");

        mainMouth(main_id);

    },function () {return false;});

    var mainProduce= function (main_id) {

        if($("."+main_id).hasClass("display-none")) {

            $(".producting ").addClass("display-none");

            $("."+main_id).removeClass("display-none");
        }
    }
    $(".product li a").hover(function(){

        if(!$(this).hasClass("on")){

            $(".product li a").removeClass("on");

            $(this).addClass("on");
        }

        var main_id = $(this).attr("data-id");

        mainProduce(main_id);

    },function () {return false;});
    var mainTime= function (main_id) {

        if($("."+main_id).hasClass("display-none")) {

            $(".animate").addClass("display-none");

            $("."+main_id).removeClass("display-none");
        }
    }
    $(".tim li a").hover(function(){

        if(!$(this).hasClass("on")){

            $(".tim li a").removeClass("on");

            $(this).addClass("on");
        }

        var main_id = $(this).attr("data-id");

        mainTime(main_id);

    },function () {return false;});

    $(".allPage ul li").hover(function(){

        if(!$(".loG",this).hasClass("display-none")) {
            $(".loG").removeClass("display-none");
            $(".loG",this).addClass("display-none");
            $(".say").addClass("display-none");
            $(".say",this).removeClass("display-none")
        }
    });
});

$(function(){
    $(".anniu li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        var num=$(this).index();
        $(".mid-mis ul").animate({marginLeft:-500*num},"slow");
    });
    //图片自动轮播效果
    var a=0;

    //点击左右按钮，图片进行切换效果
    $(".lf-btn").click(function(){
        if(a)
        a--;
        a=(a+2)%2;
        $(".mid-mis ul").animate({marginLeft:-500*a},"slow");
        $(".anniu li").eq(a).addClass("on").siblings().removeClass("on");
    });
    $(".rt-btn").click(function(){
        //a++;
        a=1;
        $(".mid-mis ul").animate({marginLeft:-500*a},"slow");
        $(".anniu li").eq(a).addClass("on").siblings().removeClass("on");
    });


});
$(function(){
    $(".anniu-1 li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        var num=$(this).index();
        $(".mid-mis-1 ul").animate({marginLeft:-500*num},"slow");
    });
    //图片自动轮播效果
    var a=0;

    //点击左右按钮，图片进行切换效果
    $(".lf-btn").click(function(){
        if(a)
            a--;
        a=(a+2)%2;
        $(".mid-mis-1 ul").animate({marginLeft:-500*a},"slow");
        $(".anniu-1 li").eq(a).addClass("on").siblings().removeClass("on");
    });
    $(".rt-btn").click(function(){
        //a++;
        a=1;
        $(".mid-mis-1 ul").animate({marginLeft:-500*a},"slow");
        $(".anniu-1 li").eq(a).addClass("on").siblings().removeClass("on");
    });


});
$(function(){
    $(".anniu-2 li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        var num=$(this).index();
        $(".mid-mis-2 ul").animate({marginLeft:-500*num},"slow");
    });
    //图片自动轮播效果
    var a=0;

    //点击左右按钮，图片进行切换效果
    $(".lf-btn").click(function(){
        if(a)
            a--;
        a=(a+2)%2;
        $(".mid-mis-2 ul").animate({marginLeft:-500*a},"slow");
        $(".anniu-2 li").eq(a).addClass("on").siblings().removeClass("on");
    });
    $(".rt-btn").click(function(){
        //a++;
        a=1;
        $(".mid-mis-2 ul").animate({marginLeft:-500*a},"slow");
        $(".anniu-2 li").eq(a).addClass("on").siblings().removeClass("on");
    });


});
$(function(){
    $(".anniu-3 li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        var num=$(this).index();
        $(".mid-mis-3 ul").animate({marginLeft:-500*num},"slow");
    });
    //图片自动轮播效果
    var a=0;

    //点击左右按钮，图片进行切换效果
    $(".lf-btn").click(function(){
        if(a)
            a--;
        a=(a+2)%2;
        $(".mid-mis-3 ul").animate({marginLeft:-500*a},"slow");
        $(".anniu-3 li").eq(a).addClass("on").siblings().removeClass("on");
    });
    $(".rt-btn").click(function(){
        //a++;
        a=1;
        $(".mid-mis-3 ul").animate({marginLeft:-500*a},"slow");
        $(".anniu-3 li").eq(a).addClass("on").siblings().removeClass("on");
    });


});
$(function(){
    $(".anniu-4 li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        var num=$(this).index();
        $(".mid-mis-4 ul").animate({marginLeft:-500*num},"slow");
    });
    //图片自动轮播效果
    var a=0;

    //点击左右按钮，图片进行切换效果
    $(".lf-btn").click(function(){
        if(a)
            a--;
        a=(a+2)%2;
        $(".mid-mis-4 ul").animate({marginLeft:-500*a},"slow");
        $(".anniu-4 li").eq(a).addClass("on").siblings().removeClass("on");
    });
    $(".rt-btn").click(function(){
        //a++;
        a=1;
        $(".mid-mis-4 ul").animate({marginLeft:-500*a},"slow");
        $(".anniu-4 li").eq(a).addClass("on").siblings().removeClass("on");
    });


});
$(function(){
    //图片自动轮播效果
    var a=0;
    var automatic=setInterval(function(){
        a++;
        a=a%3;
        $(".pic").animate({marginLeft:-1200*a},"slow");
    },6000);
});