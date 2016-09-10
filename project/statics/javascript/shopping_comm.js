// JavaScript Document
$(document).ready(function(){
        $("#checkAll").click(function(){
            if(this.checked)
            {
                $("input[name='checkbox']").each(function(){
                    this.checked=true;
                });
            }
            else
            {
                $("input[name='checkbox']").each(function(){
                    this.checked=false;
                });
            }

        });
});
$(document).ready(function(){
        $("#checkAll-1").click(function(){
            if(this.checked)
            {
                $("input[name='checkbox']").each(function(){
                    this.checked=true;
                });
            }
            else
            {
                $("input[name='checkbox']").each(function(){
                    this.checked=false;
                });
            }

        });
});
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
function show1(){
var getNum = parseInt(document.getElementById("setNum").value);
var getNumo = parseInt(document.getElementById("setNum-3").value);
document.getElementById("setNum").value = getNum + 1;
var getNume = getNum + 1;
document.getElementById("setNum-3").value = (getNume * 299.00).toFixed(2);
var getNumoe = parseInt(document.getElementById("setNum-5").value);
document.getElementById("setNum-5").value = (getNumoe + 299.00).toFixed(2);
var getNumoea = parseInt(document.getElementById("setNum-6").value);
document.getElementById("setNum-6").value = (getNumoea + 1 ).toFixed(0);


}
function show2(){
var getNum = parseInt(document.getElementById("setNum").value);
var getNumo = parseInt(document.getElementById("setNum-3").value);
if(getNum > 0){
document.getElementById("setNum").value = getNum - 1;
var getNume = getNum - 1;
document.getElementById("setNum-3").value = ((getNume * 299.00)).toFixed(2);
var getNumoe = parseInt(document.getElementById("setNum-5").value);
document.getElementById("setNum-5").value = (getNumoe - 299.00 ).toFixed(2);
var getNumoea = parseInt(document.getElementById("setNum-6").value);
document.getElementById("setNum-6").value = (getNumoea - 1 ).toFixed(0);
}
}
function show3(){
var getNum = parseInt(document.getElementById("setNum-1").value);
var getNumo = parseInt(document.getElementById("setNum-2").value);
document.getElementById("setNum-1").value = getNum + 1;
var getNume = getNum + 1;
document.getElementById("setNum-2").value = (getNume * 299.00).toFixed(2);
var getNumoe = parseInt(document.getElementById("setNum-5").value);
document.getElementById("setNum-5").value = (getNumoe + 299.00).toFixed(2);
var getNumoea = parseInt(document.getElementById("setNum-6").value);
document.getElementById("setNum-6").value = (getNumoea + 1 ).toFixed(0);
}
function show4(){
var getNum = parseInt(document.getElementById("setNum-1").value);
var getNumo = parseInt(document.getElementById("setNum-2").value);
if(getNum > 0){
document.getElementById("setNum-1").value = getNum - 1;
var getNume = getNum - 1;
document.getElementById("setNum-2").value = ((getNume * 299.00)).toFixed(2);
var getNumoe = parseInt(document.getElementById("setNum-5").value);
document.getElementById("setNum-5").value = (getNumoe - 299.00 ).toFixed(2);
var getNumoea = parseInt(document.getElementById("setNum-6").value);
document.getElementById("setNum-6").value = (getNumoea - 1 ).toFixed(0);
}

}