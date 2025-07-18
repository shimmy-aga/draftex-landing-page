// -------------------------- // ------------------------ // 
//                            // ------------------------ // 
// -------------------------- // ------------------------ // ------------------------ // 
// Always Resize the Document // ------------------------ // ------------------------ // 
// -------------------------- // ------------------------ // ------------------------ // 
//                            // ------------------------ // 
// -------------------------- // ------------------------ // 



$(document).ready(function() {
    $(window).resize();
})



// ------------------------ // ------------------------ // 
//                          // ------------------------ // 
// ------------------------ // ------------------------ // ------------------------ // 
// Change Header On Scroll  // ------------------------ // ------------------------ // 
// ------------------------ // ------------------------ // ------------------------ // 
//                          // ------------------------ // 
// ------------------------ // ------------------------ // 



$(function(){
    var lastScrollTop = 0, delta = 15;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       
       if(Math.abs(lastScrollTop - st) <= delta)
          return;
if ((st > lastScrollTop) && (lastScrollTop>15)) {
       // downscroll code
    $('.header').addClass('active');
   } if((st < lastScrollTop) && (lastScrollTop<50)) {
      // upscroll code
    $('.header').removeClass('active');
   }
       lastScrollTop = st;
    });
});



// ----------------------- // ------------------------ // 
//                         // ------------------------ // 
// ----------------------- // ------------------------ // ------------------------ // 
// Show Nav-Menu on Click  // ------------------------ // ------------------------ // 
// ----------------------- // ------------------------ // ------------------------ // 
//                         // ------------------------ // 
// ----------------------- // ------------------------ // 



$(function() {
    $('.burger-menu').on('click', function() {
       $('.burger-menu').toggleClass('active', 500);
    });
});
 
$(function() {
    $('.burger-menu').on('click', function() {
       if($('.mobile-nav-content').css('right') == '0px') {
          $('.mobile-nav-menu').fadeOut(300);
          $('.mobile-nav-content').animate({"right": '-100%'}, 450);
          $('.mobile-nav-shadow-layer').animate({"right": '-95%'}, 450);
       } else {
          $('.mobile-nav-menu').fadeIn(300);
          $('.mobile-nav-content').animate({"right": '0'}, 450);
          $('.mobile-nav-shadow-layer').animate({"right": '5%'}, 450);
       };
    });
});


// --------------------- //
// Show on swipe as well //
// --------------------- //


$(function() {
    if('ontouchstart' in window) {

        $(function() {
            $('body').on('swipeleft', function() {
                $('.burger-menu').addClass('active', 500);
            });
 
            $('body').on('swiperight', function() {
                $('.burger-menu').removeClass('active', 500);
            });
        });
 
        $(function() {
            $('body').on('swipeleft', function() {
                $('.mobile-nav-menu').fadeIn(300);
            });
        });
 
       $(function() {
            $('body').on('swiperight', function() {
                $('.mobile-nav-menu').fadeOut(300);
            });
        });
 
       $(function() {
            $('body').on('swipeleft', function() {
                $('.mobile-nav-content').animate({"right": '0'}, 450);
                $('.mobile-nav-shadow-layer').animate({"right": '5%'}, 450);
            });
        });
 
       $(function() {
            $('body').on('swiperight', function() {
                $('.mobile-nav-content').animate({"right": '-100%'}, 450);
                $('.mobile-nav-shadow-layer').animate({"right": '-95%'}, 450);
            });
        });

    }
})
 


// ----------------------- // ------------------------ // 
//                         // ------------------------ // 
// ----------------------- // ------------------------ // ------------------------ // 
// Scroll Down on Click    // ------------------------ // ------------------------ // 
// ----------------------- // ------------------------ // ------------------------ // 
//                         // ------------------------ // 
// ----------------------- // ------------------------ // 



$(function() {
    $('.fa-circle').click( function() {
       $('html, body').animate({scrollTop: $('#first-section').offset().top -70}, 50, 'linear');
    });
});

$(function() {
    $('.centered-text p').click( function() {
       $('html, body').animate({scrollTop: $('#secondary-banner').offset().top + 800}, 50, 'linear');
    });
});



// ------------------------ // ------------------------ // 
//                          // ------------------------ // 
// ------------------------ // ------------------------ // ------------------------ // 
// Scroll down to quote     // ------------------------ // ------------------------ // 
// ------------------------ // ------------------------ // ------------------------ // 
//                          // ------------------------ // 
// ------------------------ // ------------------------ // 



$(function() {
    if('ontouchstart' in window) {

        if (window.location.href.indexOf("offerte") != -1) {
            $('html, body').animate({scrollTop: $('#offerte-formulier').offset().top -100}, 50, 'linear');
        }
    } else {
        if (window.location.href.indexOf("offerte") != -1) {
            $('html, body').animate({scrollTop: $('#offerte-formulier').offset().top -250}, 50, 'linear');
        }
    }
});



// ------------------------ // ------------------------ // 
//                          // ------------------------ // 
// ------------------------ // ------------------------ // ------------------------ // 
// Cookie Consent           // ------------------------ // ------------------------ // 
// ------------------------ // ------------------------ // ------------------------ // 
//                          // ------------------------ // 
// ------------------------ // ------------------------ // 



window.onload = function () {
    if (localStorage.getItem("hasCodeRunBefore") === null) {
        $('.cookie-message').css('display', 'flex');
        localStorage.setItem("hasCodeRunBefore", true);
    }
}

$(function() {
    $('.close').click( function() {
        $('.cookie-message').fadeOut(350);
    })
});
