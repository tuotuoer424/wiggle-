$(function(){
	var email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
	var password = /^[a-z0-9_-]{6,18}$/;
	$("#regEmail").blur(function(){		
		if($(this).val()==""){
			$(".emailP").html("请输入正确的电子邮箱");
			$(".emailP").css("color","#711019");
		}else if(!email.test($(this).val())){
			$(".emailP").html("请确保所输入的电子邮箱正确");
			$(".emailP").css("color","#711019");
		}
	});
	$("#regEmail1").blur(function(){
		var emailValue1 = $(this).val();
		var emailValue2 = $("#regEmail").val();		
		if(emailValue1 != emailValue2){
			$(".emailP1").html("两次输入不一致");
			$(".emailP1").css("color","#711019");
		}else{
			$(".emailP1").html("");
		}
	});
	$("#regPassword").blur(function(){		
		if($(this).val()==""){	
			$(".passwordP").html("密码不能为空");
			$(".passwordP").css("color","#711019");
		}else if(!password.test($(this).val())){
			// $("#p1").css("display","block");
			$(".passwordP").html("密码长度不符");
			$(".passwordP").css("color","#711019");
		}else{
			$(".passwordP").html("");
		}
	});		
	$("#regEmail").blur(function(){
		var value = $(this).val();
		if(value!="" && email.test(value)){
			$.post("php/ajaxReg.php",{useremail:value},function(date){
				if(date==0){
					$("#emailP").html("该邮箱地址可以使用");
					$("#emailP").css("color","green");
				}else{
					$("#emailP").html("该邮箱地址已经注册");
					$("#emailP").css("color","#711019");
				}
			})
		}
	});
	$("input").focus(function(){
		$(this).css("borderColor","#ff920b");
	});
	$("input").blur(function(){
		$(this).css("borderColor","#666666");
	});
	$("#regSex").focus(function(){
		$(this).css("borderColor","#ff920b");
	});
	$("#regSex").blur(function(){
		$(this).css("borderColor","#666666");
	});

})