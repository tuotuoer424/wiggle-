<?php 
    header("Content-type:text/html;charset=utf-8");
	$Email = $_POST["useremail"];
	$password = $_POST["userpassword"];
	$name = $_POST["username"];
	$name1 = $_POST["username1"];
	$sex=$_POST["usersex"];

	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
		die("数据库连接失败：".mysql_error());
	}else{
		//2）、选择目的地（选择操作的数据库）
		mysql_select_db("wiggle",$conn);
		$sqlstr = "select * from person where Email='$Email'";
		$result = mysql_query($sqlstr,$conn);
		$rows = mysql_num_rows($result);
		if($rows == 0){
			$sqlstr ="insert into  person (Email,password,name,name1,sex) 
						values('$Email','$password','$name','$name1','$sex')";
			$result = mysql_query($sqlstr,$conn);
			mysql_close($conn);	
			if($result==1){
				echo "<script> alert('注册成功！请登录');location.href='../login.html'; </script>"; 
			}else{
				echo "<script> alert('注册失败！请重新注册');location.href='../reg.html'; </script>";
			}		
		}else{
			echo "<script> alert('注册失败！请重新注册');location.href='../reg.html'; </script>";
		}
	}
 ?>