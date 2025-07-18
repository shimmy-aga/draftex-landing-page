<?php

if(isset($_POST['offerte-submit'])) {
    $firstname = $_POST['first-name'];
    $lastname = $_POST['last-name'];
    $email = $_POST['email-address'];
    $message = $_POST['form-message'];
    $website = $_POST['web-url'];
    $service = $_POST['service'];

    $recipient = "info@draftex.nl";
    $subject = "Bericht van klant ($service)";
    $content= "Van: $firstname $lastname \n \n met website: $website \n \n Bericht: $message";
    $mailheader = $email;


    mail($recipient, $subject, $content, $mailheader);

    echo "<i class='far fa-check-circle'></i>";
    echo "<br><br>";
    echo "<h1 style='text-align:center;'>Wij hebben uw aanvraag binnen!</h1><br>";
    echo "<h2 style='text-align:center;'>U zult spoedig van ons horen</h2>";

} else {

    echo "<i class='far fa-times-circle'></i>";
    echo "<br><br>";
    echo "<h1 style='text-align:center;'>Er gaat iets fout</h1><br>";
    echo "<h2 style='text-align:center;'>Probeer het alstublieft later opnieuw</h2>";
    
    $destination = "info@draftex.nl";
    $root = "hosting:draftex";
    $log = "Error / Foutmelding - Contact Formulier";
    $error = "POST Error - _POST krijgt geen gegevens binnen bij form.submit(); [Mogelijke Fout: Syntax, Depreciatie, Overbelasting, .htacces]";

    mail($destination, $log, $error, $root);
}

?>




<link rel="stylesheet" href="../assets/css/contact.css">
<link rel="stylesheet" href="../assets/css/style.css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">