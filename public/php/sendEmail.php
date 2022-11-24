<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../php/PHPMailer/src/Exception.php';
require '../php/PHPMailer/src/PHPMailer.php';
require '../php/PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

$noReply = 'dustin@dustinsmith.tech';
$toMe = 'dustin@dustinsmith.tech';

$fromWho = $_POST[json_decode("yourName")];
$message = $_POST["contactReason"];

try {
  //Server settings
  //$mail->SMTPDebug = 2;
  $mail->isSMTP(); //Send using SMTP
  $mail->Host = 'smtp.hostinger.com'; //Set the SMTP server to send through
  $mail->SMTPAuth = true; //Enable SMTP authentication
  $mail->Username = $noReply; //SMTP username
  $mail->Password = ''; //SMTP password
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
  $mail->Port = 465; 

  //Recipients
  $mail->setFrom($noReply, $fromWho);
  $mail->addAddress($noReply, 'Dustin'); //Add a recipient
  // $mail->addCC( $ccSender );
  $mail->addBCC($toMe);

  //Content
  $mail->isHTML(true); //Set email format to HTML
  $mail->Subject = 'Message from dustinsmith.tech';
  $mail->Body = $message;
  $mail->AltBody = $message;

  $mail->send();
  echo 'Message has been sent';
} catch (Exception $e) {
  echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
