<?php
	if(isset($_POST["to"])){
		require "PHPMailerAutoload.php";
		$mail = new PHPMailer;
		//$mail->SMTPDebug = 3;
		$mail->CharSet    = 'UTF-8';
		$mail->isSMTP();
		$mail->Host="smtp.163.com";
		$mail->SMTPAuth = true; 
		$mail->Username = "zhang_sk97@163.com";
		$mail->Password = "asdfg112";
		$mail->SMTPSecure = 'tls';
		$mail->Port = 25;
		$mail->setFrom ("zhang_sk97@163.com", "Mailer");
		$mail->addAddress($_POST["to"], "成员");
		$mail->isHTML(true); 		
			
		$code = strval(random_int(0,9999));
		$mail->Subject = "Your Verification Code";
		$mail->Body = "<p>Hello,</p> <p>Your Verification Code is </p>".$code; 
		if($mail->send()){
			echo $code;
		}
		else{
			echo("failed");
		}
	}


?>
