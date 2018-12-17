$(function(){
	//鼠标滑过导航栏 对应1级子菜单显示！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
	$(".navUl").children("li").hover(function(){
		$(this).children("a").css({
			borderBottom:"5px solid black",
		})
		$(this).children(".navList").css("display","block");
	},function(){
		$(this).children("a").css({
			borderBottom:"none",
		})
		$(this).children(".navList").css("display","none");
	})

	//鼠标滑过一级菜单 对应2级子菜单显示！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
	$(".oneUl").children("li").hover(function(){
		$(this).css("backgroundColor","#e7e7e7");
		$(this).children().children("i").css({
			transform:"translateX(10px)",
			transition:"all 0.5s"
		});
		$(this).children(".sanji").css("display","block");
	},function(){
		$(this).children().children("i").css({
			transform:"translateX(0px)",
			transition:"all 0.5s"
		});
		$(this).css("backgroundColor","white")
		$(this).children(".sanji").css("display","none");
	})

	//鼠标滑过2级菜单 对应3级子菜单显示！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
	$(".sanji").children("ul").children("li").hover(function(){
		$(this).children(".siji").css("display","block");
	},function(){
		$(this).children(".siji").css("display","none");
	})





	//  鼠标滑过小图标改变背景色和字体颜色！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
		$(".advertisingSl").children().mouseover(function(){
			$(this).children("span").css({
				"backgroundColor":"black",
				"borderColor":"black"
			});
			$(this).children("span").children().css("color","white");
		})
	//  鼠标移出小图标改变背景色和字体颜色！！！！！！！！！！！！！！！！！！！！！！！！！！！！
		$(".advertisingSl").children().mouseout(function(){
			$(this).children("span").css({
				"backgroundColor":"white",
				"borderColor":"#ff920b"
			});
			$(this).children("span").children().css("color","#ff920b");
		})
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
});