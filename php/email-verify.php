<?php
	if(isset($_POST["to"])){
		$to = $_POST["to"];
		$subject = "1234";
		$from = "995428198@qq.com"
		$headers = "From:".$from.phpversion();;
		mail($to, $subject, $body, $headers);
		echo "An Activation Code Is Sent To You Check You Emails";
	}

?>