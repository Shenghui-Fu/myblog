
$(document).ready(function(){		


		//点击选项
		$(".payment-middle input").bind("click", function () {
			//判断是否是所有
			var data_id = $(this).attr("data-id");
			$(".payment-middle ul li img").removeClass('ane');
        	$(".payment-middle ul li img[data-id = '"+data_id+"']").addClass('ane');
		});
});
