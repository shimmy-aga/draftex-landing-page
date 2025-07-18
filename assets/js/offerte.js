// --------------- // --------------- //
//                 // --------------- //
// --------------- // --------------- // --------------- //
// Form Validation // --------------- // --------------- //
// --------------- // --------------- // --------------- // 
//                 // --------------- //
// --------------- // --------------- //



var web_regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;



// ---------- //
// ---------- // ---------- //
// Form Steps // ---------- // ---------- //
// ---------- // ---------- //
// ---------- //


$(function() {
    $('#first-step .button-filled').css('opacity', '0.2');
    $('#first-step .button-filled').css('pointer-events', 'none');
    $('#second-step .button-filled').hide();
});


$(function() {
    $('input[type="radio"]').click(function() {
        if ($('input[type="radio"]').is(':checked')) {
            $('#first-step .button-filled').css('opacity', '1');
            $('#first-step .button-filled').css('pointer-events', 'auto');
        }
    })
});


$(function() {
    $('#first-step .button-filled').click(function() {
        $('#first-step').fadeOut(500);
        $('#second-step').css('display', 'inline-block').hide().delay(500).fadeIn(300);
        $('html, body').animate({scrollTop: $('#tertiary-banner').offset().top + 400}, 50, 'linear');
    });
});

$(function() {
    $('#second-step .button-filled').click(function() {
        $('#second-step').fadeOut(500);
        $('#third-step').css('display', 'inline-block').hide().delay(500).fadeIn(300);
        $('html, body').animate({scrollTop: $('#tertiary-banner').offset().top + 400}, 50, 'linear');
    });
});



// --------- //
// --------- // --------- //
// On key up // --------- // --------- //
// --------- // --------- //
// --------- //



$(function() {
    $("#web-url").on("keyup", function() {
        if(!$(this).val()) {

        } else if(!$(this).val().match(web_regex)) {

            $(this).css('border', '3px solid rgba(106, 230, 188, 0)');

        }else {

            $(this).css('background-color', 'rgba(106, 230, 188, 0.2)')
            $(this).css('border', '3px solid rgb(106, 230, 188)');
        }
    });
});

$(function() {
    $("#first-name").on("keyup", function() {
        if(!$(this).val()) {

            $(this).css('border', '3px solid rgba(106, 230, 188, 0)');

        } else if ($(this).val() && $('#last-name').val()) {

            $(this).css('background-color', 'rgba(106, 230, 188, 0.2)')
            $(this).css('border', '3px solid rgb(106, 230, 188)');

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
        
        } else if ($(this).val() && $('#first-name').val()) {
            
            $(this).css('background-color', 'rgba(106, 230, 188, 0.2)')
            $(this).css('border', '3px solid rgb(106, 230, 188)');

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
            
        } else {

            $(this).css('background-color', 'rgba(106, 230, 188, 0.2)')
            $(this).css('border', '3px solid rgb(106, 230, 188)');

        }
    });
});

$(function() {
   $("#form-message").on("keyup", function() {
        if(!$(this).val()) {

            $(this).css('border', '3px solid rgba(106, 230, 188, 0)');

        } else {

            $(this).css('background-color', 'rgba(106, 230, 188, 0.2)')
            $(this).css('border', '3px solid rgb(106, 230, 188)');
    
        }
    });
});



// -------- //
// -------- // -------- //
// On Blur  // -------- // -------- //
// -------- // -------- //
// -------- //



$(function() {
    $("#web-url").on("blur", function() {
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



// ----------------- //
// ----------------- // ------------------- //
// Show Next button  // ------------------- // ------------------- //
// ----------------- // ------------------- // 
// ----------------- //



$(function() {
    $('input, textarea').on('keyup', function() {
        if (
            $('#web-url').val().match(web_regex) || !$('#website-url').val() &&
            $('#first-name').val() &&
            $('#last-name').val() &&
            $('#email-address').val().match(/^\S+@\S+\.\S+$/)
        ) {
            
            $('#second-step .button-filled').fadeIn(250);
        
        } else {
            
            $('#second-step .button-filled').fadeOut(250);
        
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
            $('#form-message').val()
        ) {
            
            $('#third-step .button-filled').fadeIn(250);
        
        } else {
            
            $('#third-step .button-filled').fadeOut(250);
        
        }
    });
});



// -------------------- // -------------------- // 
//                      // -------------------- // 
// -------------------- // -------------------- // -------------------- // 
// Form Submit Handling // -------------------- // -------------------- // 
// -------------------- // -------------------- // -------------------- // 
//                      // -------------------- // 
// -------------------- // -------------------- // 



$(function() {
    $("#offerte-formulier").submit(function(e) {
        $('#offerte-formulier').fadeOut(500);
        $('#offerte-output').delay(600).fadeIn(500);
        $('html, body').animate({scrollTop: $('#tertiary-banner').offset().top + 400}, 50, 'linear');
    });
});



// ------------------- //
// End Form Submission //
// ------------------- //

