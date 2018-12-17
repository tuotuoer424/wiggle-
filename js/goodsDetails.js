$(function(){
	var getStr=getCookie("goods");
	var getArr=JSON.parse(getStr);
	if(getStr!=null){
		var money = 0;
		var how = 0;
		for(var i = 0;i<getArr.length;i++){
			money+=getArr[i].goodsTotal;
			how+=getArr[i].goodsCount;
		}
		$("#price").html(money);
		$("#count").html(how);
	}
	

	//---------------------鼠标点击换图片src和边框颜色--------------------------
	var index;
	$(".small_img").click(function(){
		$(this).css({
			"border":"4px solid #ff920b",
			"padding":"0px",
			"transition":"all 0.2s"
		})
		$(this).siblings().css({
			"border":"1px solid #cccccc",
			"padding":"3px"
		})
		index = $(this).index();
		$(".number").html(index+1);
		$(".big_img").attr("src","img2/b"+(index+1)+".jpg");
	})
	
	
	$("#jiann").click(function(){
		var num = parseInt($(".number").html());
		num--;
		if(num<1){
			num = 18;
		}
		$(".number").html(num);
		$(".big_img").attr("src","img2/b"+num+".jpg");
		var $dom =$(".small_img").get(num-1);
		$dom.style.cssText="border:4px solid #ff920b;padding:0px;";
		$($dom).siblings().css({
			"border":"1px solid #cccccc",
			"padding":"3px"
		})
		
		
	})
	$("#jiaa").click(function(){
		var num = parseInt($(".number").html());
		num++;
		if(num>18){
			num = 1;
		}
		$(".number").html(num);
		$(".big_img").attr("src","img2/b"+num+".jpg");
		var $dom =$(".small_img").get(num-1);
		$dom.style.cssText="border:4px solid #ff920b;padding:0px;";
		$($dom).siblings().css({
			"border":"1px solid #cccccc",
			"padding":"3px"
		})
	})
	$(".xiaoyuhao1").click(function(){
		var num = parseInt($(".number").html());
		num--;
		if(num<1){
			num = 18;
		}
		$(".number").html(num);
		$(".big_img").attr("src","img2/b"+num+".jpg");
		var $dom =$(".small_img").get(num-1);
		$dom.style.cssText="border:4px solid #ff920b;padding:0px;";
		$($dom).siblings().css({
			"border":"1px solid #cccccc",
			"padding":"3px"
		})
		
		
	})
	$(".dayuhao1").click(function(){
		var num = parseInt($(".number").html());
		num++;
		if(num>18){
			num = 1;
		}
		$(".number").html(num);
		$(".big_img").attr("src","img2/b"+num+".jpg");
		var $dom =$(".small_img").get(num-1);
		$dom.style.cssText="border:4px solid #ff920b;padding:0px;";
		$($dom).siblings().css({
			"border":"1px solid #cccccc",
			"padding":"3px"
		})
	})
	
	// -----------------------选择颜色-----------------------------
	
	$(".choseText").click(function(){
		$(".choseColor").css({
			"border":"1px solid gainsboro"
		});
		$(".colorOp").css("display","block");
	})
	$(".colorOp").click(function(){
		var html = $(this).children("span").html();
		$(".choseText").val(html);
		$(".colorOp").css("display","none");
		$(".choseColor").css({
			"border":"none"
		});
		$(".choseText").css({
			"border-bottom-left-radius":"5px",
			"border-bottom-right-radius":"5px"
		});
		
	})
		$(window).scroll(function(){
			var top2;
			top2 = document.documentElement.scrollTop || document.body.scrollTop;
			if(top2>40){
				$(".flashSale").addClass("flashSaleFixed");
			}else{
				$(".flashSale").removeClass("flashSaleFixed");
			}
		})
		
		// 回到页首！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
		
		$(window).scroll(function(){
			var top1;
			top1 = document.documentElement.scrollTop || document.body.scrollTop;
			if(top1>780  && top1<4650){
				$(".back").addClass("fixed");
			}else{
				$(".back").removeClass("fixed");
			}
		})




//----------------------------------------------------购物车效果-----------------------------------------------

//-----------------------减少商品数量---------------------------
		$(".remove").click(function(){
			var count = parseFloat($(".count").val());
			var danjia =parseFloat($(".danjia").html());
			var total =parseFloat($(".total").val());
			count--;
			if(count<1){
				count = 1;
				$(".tishi").html("至少选择一个商品");
				$(".tishi").css({
					"fontSize":"17px",
					"color":"red"
				})
			}else{
				$(".tishi").html("");
			}
			$(".count").val(count);
			total = count * danjia;
			$(".total").val(total);
			
		})
//	--------------------------增加商品数量-------------------------
		$(".add").click(function(){
			var count = parseFloat($(".count").val());
			var danjia =parseFloat($(".danjia").html());
			var total =parseFloat($(".total").val());
			count++;
			total = count * danjia;
			$(".tishi").html("");
			$(".count").val(count);
			$(".total").val(total);
			
		})
		
		
//----------------------添加到购物车-------------------------------
		
		var goodArr =[];
		$("#addCar").click(function(){					
			$(".shadow").css("display","block");
			$(".success").css("display","block");
						
			var goodsPrice = parseFloat($(".danjia").html());  //商品单价
			var goodsCount = parseFloat($(".count").val());    //商品数量
			var goodsTotal = parseFloat($(".total").val());    //商品总价
			var goodsType =$(".choseText").val();			   //商品类型
			var goodsName =$(".goodsName1").html(); 			   //商品名字
			var goodsImg;
					
			var value = $(".choseText").val();
			if(value =="Polished Black Anno"){
				goodsImg = $("#whiteBike").attr("src");
			}else if(value =="Polished Magenta"){
				goodsImg = $("#redBike").attr("src");
			}
					
			var goods ={
				"goodsPrice":goodsPrice,
				"goodsCount":goodsCount,
				"goodsTotal":goodsTotal,
				"goodsType":goodsType,	
				"goodsName":goodsName,
				"goodsImg":goodsImg
			};
			goodArr.push(goods);
			var addStr=JSON.stringify(goodArr);
			addCookie("goods",addStr,7);
			
			
			var getStr=getCookie("goods");
			var getArr=JSON.parse(getStr);
			for(var i=0;i<getArr.length;i++){
				var strPin = '<div class="addGoods"><div class="goodsImg"><img src='+getArr[i].goodsImg+' class="goodsImgg"/></div><div class="goodsQian"><h4 class="goodsName">'+getArr[i].goodsType+'</h4><p class="goodsType">18""BMX <span class="goodsType">'+getArr[i].goodsName+'</span></p><p class="priceP">￥ <span class="goodsPrice">'+getArr[i].goodsPrice+'</span></p><p class="Qty_p">Qty : <span class="Qty">'+getArr[i].goodsCount+'</span></p></div></div>';
				$(".allGoods").append(strPin);
			}
		})
		
		$(".close").click(function(){
			$(".shadow").css("display","none");
			$(".success").css("display","none");
		})
})