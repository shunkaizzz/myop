<?php
		$servername = "localhost";
		$username = "root";
		$password = "";
		$dbname = "login";
		if(mysqli_connect($servername ,$username, $password, $dbname)){
			$conn = mysqli_connect($servername ,$username, $password, $dbname);
			if(isset($_POST["name"])&&isset($_POST["user"])){
				$candidate = $_POST["name"];
				$name = $_POST["user"];
				$sql1 = "SELECT voting FROM users WHERE username = '$name'";
				$result = mysqli_query($conn, $sql1);
				$num = mysqli_num_rows($result);
				if($num){
					$row = mysqli_fetch_array($result);
					$pre_candidate = $row[0];
					if(!$pre_candidate){
						$sql = "UPDATE voting SET votes = 1 WHERE candidate = '$candidate'";
						$sql2 = "UPDATE users SET voting = '$candidate' WHERE username = '$name'";
						mysqli_query($conn, $sql)or die(mysqli_error($conn));
						mysqli_query($conn, $sql2)or die(mysqli_error($conn));
					}else{
						echo "You have voted for ".$pre_candidate;
					}	
				}else{
					echo "Plase Login in first";
				}		
			}else{
				echo "Fail to access to posted data";
			}
		}else{
			echo "connection fail";
		}
		mysqli_close($conn);
?>