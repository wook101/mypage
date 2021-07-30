(function($) {
  "use strict"; // Start of use strict
    
    //프로젝트 클릭했을때
    $(".project1").click(function(){//게시판 
      window.open('http://15.164.48.177:8080/board','_blank');  
    });
    $(".project2").click(function(){//뮤직플레이어
      window.open('https://playmusicbox.herokuapp.com','_blank');                                              
    });
    $(".project3").click(function(){//뮤직플레이어
      window.open('https://cafemean.herokuapp.com','_blank');                                              
    });
    
  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });
    
    $('#contact').click(function(){
         $('html, body').animate({
          scrollTop: $('#footer').offset().top
        }, 1000, "easeInOutExpo");
    });

})(jQuery); // End of use strict


window.onload = function(){
    document.querySelector('.menu-toggle').removeAttribute('switch-adjust-element-width');
    document.querySelector('#sidebar-wrapper').removeAttribute('switch-adjust-element-width');
}

document.querySelector('.menu-toggle').removeAttribute('switch-adjust-element-width');
document.querySelector('#sidebar-wrapper').removeAttribute('switch-adjust-element-width');
    