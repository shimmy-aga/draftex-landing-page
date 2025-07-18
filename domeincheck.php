<!DOCTYPE html>
<html lang="nl">
    <head>
        <!-- SEO Tags -->
        <title>Draftex | Domeincheck</title>
        <meta name='description' content='Om het eenvoudig voor u te maken, bieden we bij Draftex ook hosting en onderhoud aan'>
        <meta name='keywords' content='Hosting, Onderhoud, Webhosting'>
        <meta http-equiv='cache-control' content='public'>
        <link rel='canonical' href='https://draftex.nl/domeincheck'>

        <?php include 'head.php';?>

        <!-- This page only CSS -->
        <!-- Link CSS -->
        <link rel="stylesheet" href="/assets/css/hosting-en-onderhoud.css">

    </head>

    <body>      

        <?php include 'header.php';?>

        
        <!-- ------ -->
        <!-- Banner -->
        <!-- ------ -->


        <div id="secondary-banner" class="banner">
            <div id="secondary-banner-title" class="banner-title">
                <div class="wrapper">
                    <h1>Domein check</h1><br>
                    <h3>Controleer nu of uw domeinnaam beschikbaar is!</h3>
                    <br><br>
                    <div class="container">
                        <form action="" method="GET">
                            <input id="searchBar" class="searchbar" type="text" name="domain" placeholder="Domeinnaam..." value="<?php if(isset($_GET['domain'])){ echo $_GET['domain']; } ?>">
                            <button type="submit" id="btnSearch" class="btn-search"><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                    <br><br>
                    <?php
                        error_reporting(0);
                        if(isset($_GET['domain'])){
                            $domain = $_GET['domain'];
                            if ( gethostbyname($domain) != $domain ) {
                                echo "<h3 class='fail'>Dit domein is helaas al bezet...</h3>";
                            }
                            else {
                                echo "<h3 class='success'>Dit domein is nog beschikbaar!</h3>";
                                echo "<h3>Neem nu contact met ons op om dit domein te registreren!</h3>";
                                echo "<br><a href='/contact'><h3>Neem contact op</h3></a>";
                            }
                        }
                    ?>
                </div>
            </div>
        </div>

        <style type="text/css">

            a h3 {
                color: rgb(41, 50, 61);
                opacity: 0.8;
                transition: 300ms;
            }

            a h3:hover {
                cursor: pointer;
                opacity: 1;
            }
            
            h3.success {
                color: rgb(106, 230, 188);
                text-align: center;
            }

            h3.fail {
                color: rgb(41, 50, 61);
                text-align: center;
            }

            .searchbar {
                padding: 10px 10px;
                max-width: 900px;
                width: 80%;
                border: none;
                margin-top: 1px;
                margin-right: 8px;
                font-size: 1.5rem;
                font-family: "Bree Serif";
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                transition: 0.3s;
            }

            .searchbar:hover {
                background-color: rgba(106, 230, 188, 0.15);
            }

            .searchbar:focus {
                background-color: rgba(106, 230, 188, 0.15);
            }

            .searchbar::placeholder {
                font-size: 1.5rem;
                font-family: "Bree Serif";
            }

            .searchbar:focus {
                outline: none;
            }

            .btn-search {
                cursor: pointer;
                font-size: 2rem;
                padding-top: 5px;
                padding-bottom: 5px;
                background-color: transparent;
                border: none;
                outline: none;
            }

            .fa-search {
                cursor: pointer;
            }

        </style>


        <!-- ------ -->
        <!-- Footer -->
        <!-- ------ -->


        <?php include 'footer.php';?>


        <!-- -------------- -->
        <!-- Cookie Consent -->
        <!-- -------------- -->


        <div class="cookie-message">
            <img src="/assets/media/images/icons8-cookie-100.png">
            <span>
               Om u de best mogelijke ervaring te geven gebruikt deze website cookies. Meer informatie over hoe we met uw gegevens omgaan vindt u <a href="/privacy-avg.php">hier</a>.
            </span>
            <div class="close" href="#"><i class="fa fa-times"></i></div>
        </div>

    </body>
    <script>
        AOS.init();
    </script>
</html>