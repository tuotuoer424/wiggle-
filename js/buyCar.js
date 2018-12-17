$(function(){
	headerCar();
	$(window).scroll(function(){
			var top2;
			top2 = document.documentElement.scrollTop || document.body.scrollTop;
			if(top2>40){
				$(".flashSale").addClass("flashSaleFixed");
			}else{
				$(".flashSale").removeClass("flashSaleFixed");
			}
	})
	
	
	var getStr=getCookie("goods");
	var getArr=JSON.parse(getStr);
	for(var i=0;i<getArr.length;i++){
		var strPin = '<div class="goodsBox"><div class="imgBox"><img src='+getArr[i].goodsImg+' class="goodsImg"/></div><div class="sdescribeBox"><h3 class="goodsType">'+getArr[i].goodsType+'</h3><p class="goodsId">20 BMX <span class="goodsName">'+getArr[i].goodsName+'</span></p><p class="removeGoods">从购物篮移除</p></div><div class="numBox"><button class="reduction">-</button><p class="count">'+getArr[i].goodsCount+'</p><button class="add">+</button></div><p class="priceP">¥ <span class="goodsPrice">'+getArr[i].goodsPrice+'</span></p><p class="totalP">¥ <span class="goodsTotal">'+getArr[i].goodsTotal+'</span></p></div>';
		$(".goodsShow_box").append(strPin);
	}
	$("#goodsAll").html(add());
	
	
	
	
	
	$(".reduction").click(function(){
		var count = parseInt($(this).next().html());
		count--;
		var price = parseFloat($(this).parent().next().children("span").html());
		var total = parseFloat($(this).parent().next().next().children("span").html());
		total = count * price;
		$(this).parent().next().next().children("span").html(total);		
		if(count<1){
			count =1;
		}
		$(this).next().html(count);
		$("#goodsAll").html(add());
	})
	$(".add").click(function(){
		var count = parseInt($(this).prev().html());
		count++;
		var price = parseFloat($(this).parent().next().children("span").html());
		var total = parseFloat($(this).parent().next().next().children("span").html());
		total = count * price;
		$(this).parent().next().next().children("span").html(total);				
		$(this).prev().html(count);
		$("#goodsAll").html(add());
	})
	
	$(".removeGoods").click(function(){
		if(confirm("确定要删除此商品？")==true){
			var index = $(this).parent().parent().index();
			var addArr=getArr.splice(index,1);
			var addStr=JSON.stringify(addArr);
			addCookie("goods",addStr,7);
			var box =$(this).parent().parent();
			$(box).remove();
			$("#goodsAll").html(add());
			headerCar();
		}
	})
			
})


function add(){
	var all=0;
	var total =$(".goodsTotal");
	for(var i=0;i<total.length;i++){
		var a =parseFloat(total[i].innerHTML);
		all+=a;
	}
	return all;
}
function headerCar(){
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
}
