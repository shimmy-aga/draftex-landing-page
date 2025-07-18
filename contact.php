<!DOCTYPE html>
<html lang="nl">
    <head>
        <!-- SEO Tags -->
        <title>Draftex | Contact</title>
        <meta name='description' content='Wij zijn bereikbaar. Stuur ons een bericht of een mail en wij zullen uiterlijk binnen twee dagen antwoorden.'>
        <meta name='keywords' content='Draftex, contact, onze gegevens'>
        <meta http-equiv='cache-control' content='public'>
        <link rel='canonical' href='https://draftex.nl/contact'>

        <?php include 'head.php';?>

        <!-- This page only CSS -->
        <!-- Link CSS -->
        <link rel="stylesheet" href="/assets/css/contact.css">

        <!-- This page only JS -->
        <!-- Link JS -->
        <script src="assets/js/contact-form.js"></script>

    </head>

    <body>

        <?php include 'header.php';?>

        
        <!-- ------ -->
        <!-- Banner -->
        <!-- ------ -->


        <div id="secondary-banner" class="banner">
            <div id="secondary-banner-title" class="banner-title">
                <h1 data-aos="fade-up" data-aos-duration="1000">Wij zijn bereikbaar.</h1><br>
                <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Vragen of hulp nodig?</h2><br><br>
                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">Stuur ons een bericht of een mail en wij zullen uiterlijk binnen twee dagen antwoorden.</p>
            </div>
        </div>

        
        <!-- ---- -->
        <!-- Main -->
        <!-- ---- -->


        <!-- ------------- -->
        <!-- First Section -->
        <!-- ------------- -->

        <div id="bedrijfsgegevens"></div>

        <div id="secondary-section" class="light-green-background section">
            <div data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="0" class="fixed-width-wide article-text-centered">
                <h1>draftex</h1>
                <h2>Webdesign & Marketing</h2>
            </div>

            <br>

            <div data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="0" class="fixed-width-small article-text-centered">
                <h3>Partners & Development</h3>
                <ul>
                    <li><a href="mailto:partners@draftex.nl">partners@draftex.nl</a></li>
                    <li><a href="tel:+31854013630">+31 85 4013630</a></li>
                </ul>
            </div>

            <div data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="200" class="fixed-width-small article-text-centered">
                <h3>Service & Support</h3>
                <ul>
                    <li><a href="mailto:info@draftex.nl">info@draftex.nl</a></li>
                    <li><a href="tel:+31850045328">+31 85 0045328</a></li>
                </ul>
            </div>

            <div data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="300" class="fixed-width-small article-text-centered">
                <h3>Bedrijfsgegevens</h3>
                <ul>
                    <li>KVK: 81867999</li>
                    <li>BTW: NL 003613955 B33</li>
                </ul>
            </div>    
        </div>

        <div id="tertiary-section" class="light-background section">

            <div data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="150" class="fixed-width-wide article-text-left">
                <br><br>
                <h1>Contact Formulier</h1><br>
                <p>
                    Bent u nog geen klant of partner? Vul dan het formulier in als u een algemene vraag of opmerking heeft.
                </p>
            </div>

            <div data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="350" class="fixed-width-wide fixed-min-height-regular article-text-centered">
                <form id="contact-form" method="post" action="/PHP-actions/contact-form-submit.php" target="contact-form-output-frame">
                    <br>
                    <label>
                        <input type="text" id="website-url" name="website-url" placeholder="Website-link (optioneel)">
                        <i id="first-check" class="fas fa-check"></i>
                    </label>

                    <label>
                        <input type="text" id="first-name" name="first-name" placeholder="Voornaam" required>
                    </label>

                    <label>
                        <input type="text" id="last-name" name="last-name" placeholder="Achternaam" required>
                        <i id="second-check" class="fas fa-check"></i>
                    </label>

                    <label>
                        <input type="email" id="email-address" name="email-address" placeholder="Emailadres" required>
                        <i id="third-check" class="fas fa-check"></i>
                    </label>

                    <label>
                        <textarea id="form-message" name="message" placeholder="Licht uw wensen zo duidelijk mogelijk aan ons toe" rows="7" required></textarea>
                        <i id="fourth-check" class="fas fa-check"></i>
                    </label>

                    <br><br><br>

                    <label>
                        <input class="button-transparant" type="submit" id="contact-submit" name="contact-submit" value="Indienen">
                    </label>

                    <label>
                        <input class="fake-button" type="submit" value="Vul het formulier in" disabled>
                    </label>
                </form>

                <iframe id="contact-form-output-frame" name="contact-form-output-frame">

                </iframe>
            </div>
        </div>


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