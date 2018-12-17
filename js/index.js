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
	// 圣诞图片自动播放！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
		var ord = 0;
		setInterval(function(){
			ord++;			
			if(ord>2){
				ord=0;
			}
			$(".giftA").children("img").attr("src","img/bg"+ord+".jpg");
		},1000)

	// 鼠标滑过礼物，改变图片路径 ！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
		var srcc;
		var direction = 1;
		var deg = 0;
		var step = 5;
		var ord=0;
		var timer=null;
		$(".everyoneTop_A").mouseover(function(){
			srcc=$(this).children().children().children("img").attr("src");
			$(this).children().children().children("img").attr("src","img/"+$(this).index()+".png"); 
			if(timer!=null){
				window.clearInterval(timer);
				timer=null;
			}
			timer=setInterval(()=>{
				ord++;
				deg+=direction*step;
				if(deg>20){
					direction=-1;							
				}else if(deg<-20){
					direction=1;
				}
				if(ord>24){
					window.clearInterval(timer);
					deg=0;
				}
				$(this).children().children().children("img").css({
						"transform":"rotate("+deg+"deg)"					
				});


			},10)
			
		})
	// 鼠标移出礼物，改变图片路径 让礼物抖动！！！！！！！！！！！！！！！！！！！！！
		$(".everyoneTop_A").mouseout(function(){
			$(this).children().children().children("img").attr("src",srcc);
			window.clearInterval(timer);
			timer=null;
			$(this).children().children().children("img").css({
						"transform":"rotate(0deg)",
			});
		})
		var srccc;
		$(".everyoneBottom_A").mouseover(function(){
			srccc=$(this).children().children().children("img").attr("src");
			$(this).children().children().children("img").attr("src","img/b"+$(this).index()+".png");
			if(timer!=null){
				window.clearInterval(timer);
				timer=null;
			}
			timer=setInterval(()=>{
				ord++;
				deg+=direction*step;
				if(deg>20){
					direction=-1;							
				}else if(deg<-20){
					direction=1;
				}
				if(ord>24){
					window.clearInterval(timer);
					deg=0;
				}
				$(this).children().children().children("img").css({
						"transform":"rotate("+deg+"deg)"					
				});


			},10)
		})
		$(".everyoneBottom_A").mouseout(function(){
			$(this).children().children().children("img").attr("src",srccc);
			window.clearInterval(timer);
			timer=null;
			$(this).children().children().children("img").css({
						"transform":"rotate(0deg)",
			});
		});




		// 回到页首！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
		
		$(window).scroll(function(){
			var top1;
			top1 = document.documentElement.scrollTop || document.body.scrollTop;
			if(top1>780  && top1<2445){
				$(".back").addClass("fixed");
			}else{
				$(".back").removeClass("fixed");
			}
		})
			
		
		// $(".back").css({
		// 	"position":"fixed",
		$("input").focus(function(){
			$(this).css({
				"outline":"none",
				"borderColor":"#fe920c"
			});
		})
		$("input").blur(function(){
			$(this).css({
				"borderColor":"#cccccc"
			});
		})

		

	})