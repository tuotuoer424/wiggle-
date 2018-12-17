$(function(){
	var email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
	var password = /^[a-z0-9_-]{6,18}$/;
	$("#email").blur(function(){		
		if($(this).val()==""){
			$("#p").html("请输入正确的电子邮箱");
			$("#p").css("color","#711019");
		}else if(!email.test($(this).val())){
			// $("#p1").css("display","block");
			$("#p").html("请确保所输入的电子邮箱正确");
			$("#p").css("color","#711019");
		}
	});
	$("#email1").blur(function(){
		if($(this).val()==""){
			$("#p1").html("请输入正确的电子邮箱");
			$("#p1").css("color","#711019");
		}else if(!email.test($(this).val())){
			// $("#p1").css("display","block");
			$("#p1").html("请确保所输入的电子邮箱正确");
			$("#p1").css("color","#711019");
		}
	})

	$("#email").blur(function(){
		var value = $(this).val();
		if(value!="" && email.test(value)){
			$.post("php/ajaxLogin.php",{useremail1:value},function(date){
				if(date==0){
					$("#p").html("该用户名不存在");
					$("#p").css("color","#711019");
				}else{
					$("#p").html("");
				}
			});	
		}
	});	
	$("#password").blur(function(){
		var email = $("#email").val();
		var value = $(this).val();
		if(value!=""){
			$.post("php/password.php",{
				userpassword:value,
				useremail:email
			},function(date){
				if(date==0){
					$("#p3").html("密码错误");
					$("#p3").css("color","#711019");
				}else{
					$("#p3").html("");
				}
			});	
		}else{
			$("#p3").html("密码不能为空");
		}
	});		
	$("#email1").blur(function(){
		var value = $(this).val();
		if(value!="" && email.test(value)){
			$.post("php/ajaxReg.php",{useremail1:value},function(date){
				if(date==0){
					$("#p1").html("该邮箱地址可以使用");
					$("#p1").css("color","green");
				}else{
					$("#p1").html("该邮箱地址已经注册");
					$("#p1").css("color","#711019");
				}
			})
		}
	});	
	$(".submit").click(function(){
		var email = $("#email").val();
		var value = $("#password").val();
		if(value!=""){
			$.post("php/login.php",{
				userpassword1:value,
				useremail1:email
			},function(date){
				if(date==0){
					alert("邮箱或者密码错误");
				}else{
					location.href="index.html";
				}
			});	
		}else{
			$("#p3").html("密码不能为空");
		}
	})
	$(".submit1").click(function(){
		var email = $("#email1").val();
		if(email!=""){
			$.post("php/ajaxReg.php",{
				useremail1:email
			},function(date){
				if(date==0){
					$("#p1").html("该邮箱地址可以使用");
					$("#p1").css("color","green");
					location.href="reg.html";
				}else{
					$("#p1").html("该邮箱地址已经注册");
				}
			});	
		}else{
			$("#p1").html("邮箱不能为空");
		}
	})
})