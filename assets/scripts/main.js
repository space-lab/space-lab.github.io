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

  navigationToggle();
});

function scroll(link, div){
  $(link).on('click', function (){
    $('html, body').animate({
        scrollTop: $(div).offset().top
    }, 500);
  });
};

function navigationToggle() {
  var menu = $('.nav-menu'),
       nav = $('.right-links'),
       navOpened = $('.nav-menu-opened'),
       animateTime = 500;

 navOpened.hide();

 $(menu).click(function(){
   slideToggle();
 });
 $(navOpened).click(function(){
   slideToggle();
 });

 function slideToggle() {
   if(nav.height() === 0){
     menu.hide();
     navOpened.show();
     autoHeightAnimate(nav, animateTime);
   } else {
     menu.show();
     navOpened.hide();
     nav.stop().animate({ height: '0' }, animateTime);
   }
 }

  function autoHeightAnimate(element, time){
  	var curHeight = element.height(),
        autoHeight = element.css('height', 'auto').height();

        element.height(curHeight);
    	  element.stop().animate({ height: autoHeight }, parseInt(time));
  }

};






var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
