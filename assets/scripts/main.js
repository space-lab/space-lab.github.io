$(function (){
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
});

function scroll(link, div){
  $(link).on('click', function (){
    $('html, body').animate({
        scrollTop: $(div).offset().top
    }, 500);
  });
};
