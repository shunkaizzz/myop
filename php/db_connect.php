	
	<?php
		
		$servername = "localhost";
		$username = "root";
		$password = "";
		$dbname = "login";
		$tablename = "users";


		//require("login.php");
		if(mysqli_connect($servername ,$username, $password, $dbname)){
			$conn = mysqli_connect($servername ,$username, $password, $dbname);
			if(isset($_POST["username"])&&isset($_POST["psw"])&&isset(($_POST["email"]))){
					$name = $_POST["username"];
					$psw = $_POST["psw"];
					$email = $_POST["email"]; 	
			}
			//mysql_query("set names 'utf8'");
			$sql = "INSERT INTO users (username,email,password) VALUES ('$name','$email','$psw');";
			mysqli_query($conn, $sql)or die(mysqli_error($conn));
			mysqli_close($conn);			
		}else{
			echo "connection fail";
		}

	?>
