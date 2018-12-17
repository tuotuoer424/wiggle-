<?php 
    header("Content-type:text/html;charset=utf-8");
	$Email = $_POST["useremail1"];




	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
		die("数据库连接失败：".mysql_error());
	}else{
		//2）、选择目的地（选择操作的数据库）
		mysql_select_db("wiggle",$conn);
		$sqlstr = "select * from person where Email='$Email'";
		$result = mysql_query($sqlstr,$conn);
		if(mysql_num_rows($result) == 0){
			echo "0";
		}else{
			echo "1";
		}
	}
	mysql_close($conn);
?>