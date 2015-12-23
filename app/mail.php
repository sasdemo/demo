<?php
    //error_reporting(-1);
    //ini_set('display_errors', 'On');
    //set_error_handler("var_dump");

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $name =  $request->name;
    $email =  $request->email;
    $message =  $request->msg;
    $to = '';

    $subject = 'Hello';

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    $headers = array("From: ".$email,
        "Reply-To: replyto@example.com",
        "X-Mailer: PHP/" . PHP_VERSION
    );
    $headers = implode("\r\n", $headers);

    if (mail ($to, $subject, $body, $headers)) {
        echo '<p>Your message has been sent!</p>';
    }else {
            echo '<p>Error sending email</p>';
    }


?>