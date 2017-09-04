	<?php

		$servername = "localhost";
		$username = "root";
		$password = "";
		$dbname = "login";
		$tablename = "voting";	
		if(mysqli_connect($servername ,$username, $password, $dbname)){
			$conn = mysqli_connect($servername ,$username, $password, $dbname);
		$sql = "SELECT candidate, votes from voting";
		$result = mysqli_query($conn,$sql);  
 		$num = mysqli_num_rows($result);  		
            if($num)  
            {  
            	$col = array();
               while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
					$col[] = $row;      	
               }
                //$arr = array('result' => $row);
                echo json_encode($col);
            }  

		}else{
			echo "connection fail";
		}		


	?>