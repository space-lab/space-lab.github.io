$(function () {
  //scroll functionality
  scroll('#about-us-link', '#about-us');
  scroll('#services-link', '#services');
  scroll('#work-link', '#work');
  scroll('#team-link', '#team');
  scroll('#contact-link', '#contact');

  //case stuidies functionality
  $('.case-studies').slick({
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    speed: 400,
    infinite: false,
    dots: false,
    cssEase: 'linear'
  });

  navigation_toggle()
});

function scroll(link, div){
  $(link).on('click', function (){
    $('html, body').animate({
        scrollTop: $(div).offset().top
    }, 500);
  });
};

function navigation_toggle() {
  var $menu = $('.nav-menu')
  var $nav = $('.right-links')
  var $nav_opened = $('.nav-menu-opened')
  var $nav_toggle = $('.nav-menu, .nav-menu-opened')
  var animate_time = 500

  $nav_opened.hide()

  $nav_toggle.click(function(){
    slide_toggle()
  });

  function slide_toggle() {
    if($nav.height() === 0){
      $menu.hide()
      $nav_opened.show()
      auto_height_animate($nav, animate_time)
    } else {
      $menu.show()
      $nav_opened.hide()
      $nav.stop().animate({ height: '0' }, animate_time)
    }
  }

  function auto_height_animate(element, time){
    var cur_height = element.height()
    var auto_height = element.css('height', 'auto').height()

    element.height(cur_height)
	  element.stop().animate({ height: auto_height }, parseInt(time))
  }
};






var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
