// --------------- // --------------- //
//                 // --------------- //
// --------------- // --------------- // --------------- //
// Form Validation // --------------- // --------------- //
// --------------- // --------------- // --------------- // 
//                 // --------------- //
// --------------- // --------------- //



$(function() {
    $('body, html').click(function() {
        $('.temporary-notice').fadeOut(500);
    });
});

var web_regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;

$(function() {
    $('.fake-button').fadeIn();
});



// --------- //
// --------- // --------- //
// On key up // --------- // --------- //
// --------- // --------- //
// --------- //



$(function() {
    $("#website-url").on("keyup", function() {
        if(!$(this).val()) {

        } else if(!$(this).val().match(web_regex)) {

            $(this).css('border', '3px solid rgba(106, 230, 188, 0)');
            $('#first-check').fadeOut(350);

        }else {

            $(this).css('background-color', 'rgba(106, 230, 188, 0.2)')
            $(this).css('border', '3px solid rgb(106, 230, 188)');
            $('#first-check').fadeIn(350);
        }
    });
});

$(function() {
    $("#first-name").on("keyup", function() {
        if(!$(this).val()) {

            $(this).css('border', '3px solid rgba(106, 230, 188, 0)');
            $('#second-check').fadeOut(350);

        } else if ($(this).val() && $('#last-name').val()) {

            $(this).css('background-color', 'rgba(106, 230, 188, 0.2)')
            $(this).css('border', '3px solid rgb(106, 230, 188)');
            $('#second-check').fadeIn(350);

        } else {

            $(this).css('background-color', 'rgba(106, 230, 188, 0.2)')
            $(this).css('border', '3px solid rgb(106, 230, 188)');

        }
    });
});

 $(function() {
   $("#last-name").on("keyup", function() {
        if(!$(this).val()) {

            $(this).css('border', '3px solid rgba(106, 230, 188, 0)');
            $('#second-check').fadeOut(350);
        
        } else if ($(this).val() && $('#first-name').val()) {
            
            $(this).css('background-color', 'rgba(106, 230, 188, 0.2)')
            $(this).css('border', '3px solid rgb(106, 230, 188)');
            $('#second-check').fadeIn(350);

        } else {

            $(this).css('background-color', 'rgba(106, 230, 188, 0.2)')
            $(this).css('border', '3px solid rgb(106, 230, 188)');

        }
    });
});

$(function() {
   $("#email-address").on("keyup", function() {
        if(!$(this).val().match(/^\S+@\S+\.\S+$/)) {

            $(this).css('border', '3px solid rgba(106, 230, 188, 0)');
            $('#third-check').fadeOut(350);
            
        } else {

            $(this).css('background-color', 'rgba(106, 230, 188, 0.2)')
            $(this).css('border', '3px solid rgb(106, 230, 188)');
            $('#third-check').fadeIn(350);

        }
    });
});

$(function() {
   $("#form-message").on("keyup", function() {
        if(!$(this).val()) {

            $(this).css('border', '3px solid rgba(106, 230, 188, 0)');
            $('#fourth-check').fadeOut(350);

        } else {

            $(this).css('background-color', 'rgba(106, 230, 188, 0.2)')
            $(this).css('border', '3px solid rgb(106, 230, 188)');
            $('#fourth-check').fadeIn(350);
    
        }
    });
});



// -------- //
// -------- // -------- //
// On Blur  // -------- // -------- //
// -------- // -------- //
// -------- //



$(function() {
    $("#website-url").on("blur", function() {
        if(!$(this).val()) {

            $(this).css('background-color', 'rgba(238, 38, 37, 0)');
            $(this).css('border-color', 'rgb(238, 38, 37, 0)');
 
        } else if (!$(this).val().match(web_regex)) {

            $(this).css('background-color', 'rgba(238, 38, 37, 0.05)');
            $(this).css('border-color', 'rgb(238, 38, 37, 0.4)');

        }
    });
});

$(function() {
    $("#first-name").on("blur", function() {
        if(!$(this).val()) {
 
            $(this).css('background-color', 'rgba(238, 38, 37, 0.05)');
            $(this).css('border-color', 'rgb(238, 38, 37, 0.4)');
 
        } 
    });
});

$(function() {
    $("#last-name").on("blur", function() {
        if(!$(this).val()) {
 
            $(this).css('background-color', 'rgba(238, 38, 37, 0.05)');
            $(this).css('border-color', 'rgb(238, 38, 37, 0.4)');
 
        } 
    });
});

$(function() {
    $("#email-address").on("blur", function() {
        if(!$(this).val().match(/^\S+@\S+\.\S+$/)) {
 
            $(this).css('background-color', 'rgba(238, 38, 37, 0.05)');
            $(this).css('border-color', 'rgb(238, 38, 37, 0.4)');
 
        } 
    });
});

$(function() {
    $("#form-message").on("blur", function() {
        if(!$(this).val()) {
 
            $(this).css('background-color', 'rgba(238, 38, 37, 0.05)');
            $(this).css('border-color', 'rgb(238, 38, 37, 0.4)');
 
        } 
    });
});



// ------------------- //
// ------------------- // ------------------- //
// Show submit button  // ------------------- // ------------------- //
// ------------------- // ------------------- // 
// ------------------- //



$(function() {
    $('input, textarea').on('keyup', function() {
        if (
            $('#website-url').val().match(web_regex) || !$('#website-url').val() &&
            $('#first-name').val() &&
            $('#last-name').val() &&
            $('#email-address').val().match(/^\S+@\S+\.\S+$/) &&
            $('#form-message').val()
        ) {
            
            $('.fake-button').hide();
            $('#contact-submit').show();
        
        } else {
            
            $('#contact-submit').hide();
            $('.fake-button').show();
        
        }
    });
});



// ------------------- //
// End Form Validation //
// ------------------- //



// -------------------- // -------------------- // 
//                      // -------------------- // 
// -------------------- // -------------------- // -------------------- // 
// Form Submit Handling // -------------------- // -------------------- // 
// -------------------- // -------------------- // -------------------- // 
//                      // -------------------- // 
// -------------------- // -------------------- // 



$(function() {
    $("#contact-form").submit(function(e) {
        $('#contact-form').fadeOut(500);
        $('#contact-form-output-frame').delay(600).fadeIn(500);
    });
});



// ------------------- //
// End Form Submission //
// ------------------- //