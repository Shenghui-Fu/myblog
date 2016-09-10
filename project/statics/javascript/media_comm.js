// JavaScript Document
$(document).ready(function(){
        $("#checkAll").click(function(){
            if(this.checked)
            {
                $("input[name='checkbox']").each(function(){
                    this.checked=1;
                });
            }
            else
            {
                $("input[name='checkbox']").each(function(){
                    this.checked=0;
                });
            }

        });
		var onChange = function ($this, status) {
			//如果是添加	
			if(status) {
				//
				$this.addClass('cur');
				if($this.length > 1) {
					for(var i=1;i<$this.length;i++) {
						var j_h = $this[i];
						$(".mid-5 ul").append("<li class='hover' data-id='"+$(j_h).attr("data-id")+"'>"+$(j_h).text()+"<button type='submit' class='button-a'></button></li>");
					}
				}else{
					$(".mid-5 ul").append("<li class='hover' data-id='"+$this.attr("data-id")+"'>"+$this.text()+"<button type='submit' class='button-a'></button></li>");
				}
				
			}else{
				//如果是删除
				$this.removeClass('cur');
				if($this.length > 1) {
					$(".mid-1 ul li a").each(function(){
      					var data_id = $(this).attr("data-id");
						$(".mid-5 ul li[data-id = '"+data_id+"']").remove();
   					 });
				}else{
					$("li[data-id='"+$this.attr("data-id")+"']").remove();
				}
			}

			if($(".mid-5 ul li").length < 25 ) {
				$(".mid-1 ul li a[data-id='0']").removeClass('cur');
			}else{
				$(".mid-1 ul li a[data-id='0']").addClass('cur');
			}
		};
			

		//点击选项
		$(".mid-1 ul li a").bind("click", function () {
			//判断是否是所有
			var all = $(".mid-1 ul li a");
			if($(this).attr("data-id") == 0) {
				//如果是
				//判断当前状态是否是被选中状态
				if($(this).hasClass("cur")) {
					//如果是就删除全部选中状态 并删除生成HTML元素
					onChange(all, 0);
				}else{
					//如果不是选择状态就选中全部并添加HTML元素
					onChange(all, 1);
				}
			}else{

                //alert($(this).hasClass("cur"));
				//如果不是全选
				//判断是否是选择状态
				if($(this).hasClass("cur")) {
					//如果是就删除选中状态并删除HTML
                    onChange($(this), 0);
				}else{
					//如果不是就选中并添加HTML
                    onChange($(this), 1);
				}
			}
		});

		//点击下面生成的标签就删除
		$(document).on("click", ".mid-5 ul li", function () {
			//获取当前点击元素对应的A元素
			var id = $(this).attr("data-id");
			var a = $(".mid-1 ul li a[data-id='"+id+"']");
			onChange(a, 0);
		});
		$(".mid-2 ul li a").bind("click", function () {
			//判断是否是所有
			var all = $(".mid-2 ul li a");
			if($(this).attr("data-id") == 0) {
				//如果是
				//判断当前状态是否是被选中状态
				if($(this).hasClass("cur")) {
					//如果是就删除全部选中状态 并删除生成HTML元素
					onChange(all, 0);
				}else{
					//如果不是选择状态就选中全部并添加HTML元素
					onChange(all, 1);
				}
			}else{

                //alert($(this).hasClass("cur"));
				//如果不是全选
				//判断是否是选择状态
				if($(this).hasClass("cur")) {
					//如果是就删除选中状态并删除HTML
                    onChange($(this), 0);
				}else{
					//如果不是就选中并添加HTML
                    onChange($(this), 1);
				}
			}
		});

		//点击下面生成的标签就删除
		$(document).on("click", ".mid-5 ul li", function () {
			//获取当前点击元素对应的A元素
			var id = $(this).attr("data-id");
			var a = $(".mid-2 ul li a[data-id='"+id+"']");
			onChange(a, 0);
		});
		$(".mid-3 ul li a").bind("click", function () {
			//判断是否是所有
			var all = $(".mid-3 ul li a");
			if($(this).attr("data-id") == 0) {
				//如果是
				//判断当前状态是否是被选中状态
				if($(this).hasClass("cur")) {
					//如果是就删除全部选中状态 并删除生成HTML元素
					onChange(all, 0);
				}else{
					//如果不是选择状态就选中全部并添加HTML元素
					onChange(all, 1);
				}
			}else{

                //alert($(this).hasClass("cur"));
				//如果不是全选
				//判断是否是选择状态
				if($(this).hasClass("cur")) {
					//如果是就删除选中状态并删除HTML
                    onChange($(this), 0);
				}else{
					//如果不是就选中并添加HTML
                    onChange($(this), 1);
				}
			}
		});
		$(document).on("click", ".mid-5 ul li", function () {
			//获取当前点击元素对应的A元素
			var id = $(this).attr("data-id");
			var a = $(".mid-2 ul li a[data-id='"+id+"']");
			onChange(a, 0);
		});
		//点击下面生成的标签就删除
		$(document).on("click", ".mid-5 ul li", function () {
			//获取当前点击元素对应的A元素
			
			var id = $(this).attr("data-id");
			var a = $(".mid-3 ul li a[data-id='"+id+"']");
			onChange(a, 0);
		});
		$("#button-b").click(function(){
			//获取当前点击元素对应的A元素
			$(".mid-5 ul").html('');
			$(".cur").removeClass();
		});
    //$(".mid-1 ul li a").bind("click",function(){
    //    var text =$(this).text();//这里是获取点击某一个<a>标签的text值
    //    console.log(text)
    //    document.getElementById("id").value =text; //这里是给某个标签赋值
    //    //var person = localStorage.getItem("man");
    //    //var shop = localStorage.getItem("shop");
    //    //var price = localStorage.getItem("money");
    //    //var food = localStorage.getItem("food");
    //    //var array_info = JSON.parse(localStorage.getItem("info")) || [];
    //    //var obj_info = {name: person, shop: shop, food: food, money: price};
    //    //array_info.push(obj_info);
    //    //localStorage.setItem("info", JSON.stringify(array_info));
    //    //var dress = JSON.parse(localStorage.getItem("info"))
    //    //var obj_info = {latitude: geocode[0].location.getLat(), longitude: geocode[0].location.getLng()}//gaiII
    //    //localStorage.setItem("data", JSON.stringify(obj_info));
    //});
});// JavaScript Document

$(document).ready(function(){
        $(".click-2").click(function(){
            var box = $(".on-2");
		if(box.hasClass("display-none")) {
			box.removeClass("display-none");
			var box = $(".on-1");
			box.addClass("display-none")
			var box = $(".click-2");
			box.addClass("on")
			var box = $(".click-1");
			box.removeClass("on")
			var box = $(".on-3");
			box.addClass("display-none")
			var box = $(".click-3");
			box.removeClass("on")
		}
        });
});
$(document).ready(function(){
        $(".click-3").click(function(){
            var box = $(".on-3");
		if(box.hasClass("display-none")) {
			box.removeClass("display-none");
			var box = $(".on-2");
			box.addClass("display-none")
			var box = $(".click-3");
			box.addClass("on")
			var box = $(".click-2");
			box.removeClass("on")
			var box = $(".on-1");
			box.addClass("display-none")
			var box = $(".click-1");
			box.removeClass("on")
		}
        });
});
$(document).ready(function(){
        $(".click-1").click(function(){
            var box = $(".on-1");
		if(box.hasClass("display-none")) {
			box.removeClass("display-none");
			var box = $(".on-3");
			box.addClass("display-none")
			var box = $(".click-1");
			box.addClass("on")
			var box = $(".click-3");
			box.removeClass("on")
			var box = $(".on-2");
			box.addClass("display-none")
			var box = $(".click-2");
			box.removeClass("on")
		}
        });
});