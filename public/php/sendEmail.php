<?php

// testing/dev env: 
// 
// if (isset($_SERVER['HTTP_ORIGIN'])) {
//   header('Access-Control-Allow-Origin: *');
//   header('Access-Control-Allow-Credentials: true');
//   header('Access-Control-Max-Age: 1000');
// }
// if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
//   if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
//       header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
//   }

//   if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
//       header("Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization");
//   }
//   exit(0);
// }

// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../php/PHPMailer/src/Exception.php';
require '../php/PHPMailer/src/PHPMailer.php';
require '../php/PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

$toCatch = '*******@********.***';
$toMe = '*********@****.***';
$json = file_get_contents("php://input");
$data = json_decode($json, TRUE);

$from = $data['yourName'];
$message = $data['contactReason'];
$ccSender = $data['yourEmail'];

try {
  $mail->isSMTP(); 
  $mail->Host = 'smtp.********.com'; 
  $mail->SMTPAuth = true; 
  $mail->Username = $toCatch; 
  $mail->Password = ''; 
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; 
  $mail->Port = ***; 


  //Recipients
  $mail->setFrom($noReply, $fromWho);
  $mail->addAddress($noReply, ''); //Add a recipient
  // $mail->addCC( $ccSender );
  $mail->addBCC($toMe);

  //Content
  $mail->isHTML(true); //Set email format to HTML
  $mail->Subject = 'Message from *******';
  $mail->Body = $from." has sent you a message, requesting ".$message." and to reply to ".$ccSender;
  $mail->AltBody = $from." has sent you a message, requesting ".$message." and to reply to ".$ccSender;

  $mail->send();
  echo 'Thanks for checking this far into my code... your message has been sent ;o)';
} catch (Exception $e) {
  echo "Message could not be sent";
};

?>