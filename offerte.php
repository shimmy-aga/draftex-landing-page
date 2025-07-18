<!DOCTYPE html>
<html lang="nl">
    <head>
        <!-- SEO Tags -->
        <title>Draftex | Ontvang nu uw offerte</title>
        <meta name='description' content='Vraag nu een offerte aan en ontvang binnen twee dagen uw prijsopgave'>
        <meta name='keywords' content='offerte, Draftex, prijs, website'>
        <meta http-equiv='cache-control' content='public'>
        <link rel='canonical' href='https://draftex.nl/offerte'>

        <?php include 'head.php';?>

        <!-- This page only CSS -->
        <!-- Link CSS -->
        <link rel="stylesheet" href="assets/css/offerte.css">

        <!-- This page only JS -->
        <!-- Link JS -->
        <script src="assets/js/offerte.js"></script>

    </head>

    <body>      

        <?php include 'header.php';?>

        
        <!-- ------ -->
        <!-- Banner -->
        <!-- ------ -->


        <div id="tertiary-banner" class="banner">
            <div id="secondary-banner-title" class="banner-title">
                <h1 data-aos="fade-up" data-aos-duration="1000">Offerte aanvragen</h1><br>
                <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Ontvang nu uw prijsopgave</h2><br><br>
            </div>
        </div>

        
        <!-- ---- -->
        <!-- Main -->
        <!-- ---- -->


        <!-- ------------- -->
        <!-- First Section -->
        <!-- ------------- -->


        <div id="secondary-section" class="big-min-height light-green-background section">

            <!-- Form Start -->

            <iframe name="offerte-output" id="offerte-output"></iframe>

            <form id="offerte-formulier" name="offerte-formulier" method="post" action="/PHP-actions/offerte-submit.php" target="offerte-output">


            <!-- --------------- -->
            <!-- First Step Form -->
            <!-- --------------- -->


            <div id="first-step" class="form-tab">

                <h1 data-aos="fade-up" data-aos-duration="1000">Wat heeft u nodig?</h1><br>
                <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Kies een van de onderstaande producten voor welke u een offerte aan wilt vragen.</h2><br><br><br><br>

                <input type="radio" name="service" id="website" value="website">
                <input type="radio" name="service" id="landing-page" value="landing-page">
                <input type="radio" name="service" id="web-applicatie" value="web-applicatie">
                <input type="radio" name="service" id="web-content" value="web-content">
                <input type="radio" name="service" id="marketing-content" value="marketing-content">
                <input type="radio" name="service" id="social-media-campagne" value="social-media-campagne">
                <input type="radio" name="service" id="web-optimalisatie" value="web-optimalisatie">

                <label for="website" class="offerte-form-input">
                    <h1>Website</h1>
                </label>

                <label for="landing-page" class="offerte-form-input">
                    <h1>Landing Page</h1>
                </label>

                <label for="web-applicatie" class="offerte-form-input">
                    <h1>Web Applicatie</h1>
                </label>

                <label for="web-content" class="offerte-form-input">
                    <h1>Web Content</h1>
                </label>

                <label for="marketing-content" class="offerte-form-input">
                    <h1>Marketing Content</h1>
                </label>

                <label for="social-media-campagne" class="offerte-form-input">
                    <h1>Social Media Ads</h1>
                </label>

                <label for="web-optimalisatie" class="offerte-form-input">
                    <h1>Web Optimalisatie</h1>
                </label>

                <br><br><br><br>

                <p class="button-filled">Ga Verder</p>

            </div>


            <!-- ---------------- -->
            <!-- Second Step Form -->
            <!-- ---------------- -->


            <div id="second-step" class="form-tab">

                <h1 data-aos="fade-up" data-aos-duration="1000">Uw gegevens</h1><br>
                <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Dit hebben we nodig om de offerte op te kunnen sturen.</h2><br><br><br><br>

                <label for="web-url">
                    <input type="text" name="web-url" id="web-url" placeholder="Website (optioneel)"></input>
                </label>

                <label for="first-name">
                    <input type="text" name="first-name" id="first-name" placeholder="Voornaam" required></input>
                </label>

                <label for="last-name">
                    <input type="text" name="last-name" id="last-name" placeholder="Achternaam" required></input>
                </label>

                <label for="email-address">
                    <input type="email" name="email-address" id="email-address" placeholder="Emailadres" required></input>
                </label>

                <br><br><br><br>

                <p class="button-filled">Ga Verder</p>

            </div>

            
            <!-- --------------- -->
            <!-- Third Step Form -->
            <!-- --------------- -->


            <div id="third-step" class="form-tab">

                <h1 data-aos="fade-up" data-aos-duration="1000">Uw wensen</h1><br>
                <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Omschrijf zo uitgebreid mogelijk wat we voor u kunnen betekenen.</h2><br><br><br><br>

                <label for="form-message">
                    <textarea id="form-message" name="form-message" rows="9" placeholder="licht uw wensen aan ons toe" required></textarea>
                </label>

                <br><br><br><br>

                <input class="button-filled" type="submit" id="offerte-submit" name="offerte-submit" value="Indienen">

            </div>

            </form>

            <!-- Form End -->

        </div>


        <!-- ------ -->
        <!-- Footer -->
        <!-- ------ -->


        <?php include 'footer.php';?>

    </body>
    <script>
        AOS.init();
    </script>
</html>