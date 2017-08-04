	<?php

		$servername = "localhost";
		$username = "root";
		$password = "";
		$dbname = "login";
		$tablename = "users";	
		if(mysqli_connect($servername ,$username, $password, $dbname)){
			$conn = mysqli_connect($servername ,$username, $password, $dbname);
		$sql = "SELECT username,password from users where email = '$_POST[email]' and password = '$_POST[psw]'";
		$result = mysqli_query($conn,$sql);  
 		$num = mysqli_num_rows($result);  		
            if($num)  
            {  
                $row = mysqli_fetch_array($result);  //将数据以索引方式储存在数组中  
                echo $row[0];  
            }  

		}else{
			echo "connection fail";
		}		


	?>