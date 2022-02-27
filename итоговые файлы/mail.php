
<?php
	$email = htmlspecialchars(trim($_POST["email"]));
	$tel = htmlspecialchars(trim($_POST["tel"]));
	


		if ($tel) {
			$address = "order@salesgenerator.pro"; 
			$subject = "=?utf8?B?".base64_encode("Заявка с сайта")."?=";
			$message = "";
			if($email) {$message = $message . "E-mail: $email\n";}
			if($tel) {$message = $message . "Телефон: $tel\n";}
	
			 $headers = "Content-type: text/plain; charset=UTF-8 \r\n";
			 $headers .= "From: " . $from . "\r\n";
			 $headers .= "Reply-To: " . $from . "\r\n";
			 mail($address, $subject, $message, $headers);
		}

?>


	
