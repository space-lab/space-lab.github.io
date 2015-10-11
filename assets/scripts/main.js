$(function () {
  //scroll functionality
  scroll('#about-us-link', '#about-us');
  scroll('#services-link', '#services');
  scroll('#work-link', '#work');
  scroll('#team-link', '#team');
  scroll('#contact-link', '#contact');



function slider_arrow_switcher() {
  var img_left_active = 'assets/images/left-arrow.svg';
  var img_left_inactive = 'assets/images/left-arrow-inactive.svg';
  var img_right_active = 'assets/images/right-arrow.svg';
  var img_right_inactive = 'assets/images/right-arrow-inactive.svg';


  $('.prev, .next').click(function() {
    var $this = $(this).closest('.case-studie').data('slickIndex') + 1;
    $(this).closest('.case-studie').next().addClass('animated fadeInRight');
    switch_arrows($this)

  });

  $('.case-studie').on('swipe', function(event, slick, direction){
    var $this = $(this);

    switch_arrows($this);

  });





  function switch_arrows($this) {
    var sliders_length = $('.case-studie').length;
    var current_clicked_index = $this;

    if(current_clicked_index < 1) {
      $('.case-studie').eq(0).find('.arrows .prev').attr('src', img_left_inactive);
      $('.case-studie').eq(0).find('.arrows .next').attr('src', img_right_active);
    } else if ( current_clicked_index < sliders_length - 1 ) {
      $('.case-studie').eq(current_clicked_index).find('.arrows .prev').attr('src', img_left_active);
      $('.case-studie').eq(current_clicked_index).find('.arrows .next').attr('src', img_right_active);
    } else if (current_clicked_index <= sliders_length - 1) {
      $('.case-studie:last-child').find('.arrows .prev').attr('src', img_left_active);
      $('.case-studie:last-child').find('.arrows .next').attr('src', img_right_inactive);
    }
  }

}




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
  slider_arrow_switcher();
  FastClick.attach(document.body)
});

function scroll(link, div){
  $(link).on('click', function (){
    $('html, body').animate({
        scrollTop: $(div).offset().top
    }, 500);
  });
};

function navigation_toggle() {

  var menu = $('.nav-menu')
  var nav = $('.right-links')
  var nav_opened = $('.nav-menu-opened')
  var nav_toggle = $('.nav-menu, .nav-menu-opened')
  var animate_time = 300

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
