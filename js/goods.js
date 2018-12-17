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
	

  // -----------遮罩层------------------------
	$(".aImg_hover").hover(function(){
		$(this).css({
			"opacity":"0.7",
			"transition":"all 0.2s"
		});
		$(this).next("span").css({
			"opacity":"1",
			"transition":"all 2s"
		});
	},function(){
		$(this).css("opacity","0");
		$(this).next("span").css("opacity","0");
	});

	//----------------鼠标滑过black------------------
	$(".black").hover(function(){
		$(this).css({
			"border":"6px solid black",
			"borderRadius":"5px",
			"transition":"all 0.1s",
			"padding":"10px"
		})
		$(".black span:first-child").css({
			"color":"#3d5793",
			"borderBottom":"1px solid #3d5793"
		})
		$(".black span:last-child").css({
			"color":"#3d5793",
		})
	},function(){
		$(this).css({
			"border":"1px solid black",
			"padding":"15px",
			"boxSizing":"border-box"
		});
		$(".black span:first-child").css({
			"color":"black",
			"borderBottom":"none"
		})
		$(".black span:last-child").css({
			"color":"black",
		})
	});

	// ------------鼠标滑过清除过滤器 ------------------------、

	$(".clear").hover(function(){
		$(this).children("span").css({
			"color":"#3d5793",
			"borderBottom":"1px solid #3d5793"
		})
	},function(){
		$(this).children("span").css({
			"color":"white",
			"borderBottom":"none"
		})
	})

	//  ----------------加法------------------------------
	var low=parseInt($(".low").val());
	var high=parseInt($(".high").val());
	$(".jia").click(function(){		
		low++;
		$(".low").val(low);
	})
	$(".jia1").click(function(){		
		high++;
		if(high>4310){
			high = 4310;
		}
		$(".high").val(high);
	})
//  ----------------加法------------------------------
	$(".jian").click(function(){
		low--;
		if(low<1330){
			low = 1330;
		}
		$(".low").val(low);
	})
	$(".jian1").click(function(){
		high--;
		if(high<1330){
			high = 1330;
		}
		$(".high").val(high);
	})

//---------------点击下拉菜单显示-----------------------
	var a=true;
	$(".scopeSpan").click(function(){
		if(a){
			$(this).next(".scope_list").css({
			"display":"block"
			});
			$(this).children().last().html("－");
			a =false;
		}else{
			$(this).next(".scope_list").css({
				"display":"none"
			});
			$(this).children().last().html("＋");
			a =true;
		}		
	})

	$.ajax({ 
		type:"get",
		url: "php/getGoodsList.php", 
		async:true,
		data:{},
		success: function(data){
   			for(var i =0 ;i<data.length;i++){
	   				let goods ='<div class="bikeGoods">\
						<a href="goodsDetails.html" class="bikeImg">\
							<img src="'+data[i].goodsImg+'" title="Blank Ammo BMX BIke"/>\
						</a>\
						<a href="#" class="bikeBlack">'+data[i].goodsName+'</a>\
						<p class="money">¥'+data[i].goodsPrice+'<span>省 48 %</span></p>\
						<img src="'+data[i].beiyong1+'" title="此产品为0到5星中的'+data[i].beiyong2+'星" class="starIcon"/>\
						<span class="ling">  ('+data[i].beiyong2+')</span><br/>\
						<input type="checkbox"/>\
						<p class="addP">添加对比</p>\
					</div>';
					$(".goodsBox_box").append(goods);
   				}
   			},
   		dataType:"json"
      				
	});

	//-------------------------跟随滚轮-----------------------
	$(window).scroll(function(){
			var top2;
			top2 = document.documentElement.scrollTop || document.body.scrollTop;
			if(top2>40){
				$(".flashSale").addClass("flashSaleFixed");
			}else{
				$(".flashSale").removeClass("flashSaleFixed");
			}
		})
	$(window).scroll(function(){
			var top1;
			top1 = document.documentElement.scrollTop || document.body.scrollTop;
			if(top1>780  && top1<2250){
				$(".back").addClass("fixed");
			}else{
				$(".back").removeClass("fixed");
			}
		})
})