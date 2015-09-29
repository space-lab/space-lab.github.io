$(function () {
  //scroll functionality
  scroll('#about-us-link', '#about-us');
  scroll('#services-link', '#services');
  scroll('#work-link', '#work');
  scroll('#team-link', '#team');
  scroll('#contact-link', '#contact');

  //case stuidies functionality
  var unslider = $('.case-studies').unslider({
    speed: 400,
  	delay: false,
  	keys: true,
  	dots: false,
  	fluid: false
  });


  $('.unslider-arrow').on('click', function(e) {
    var fn = this.className.split(' ')[1];

    e.preventDefault();
    unslider.data('unslider')[fn]();
  });
});

function scroll(link, div){
  $(link).on('click', function (){
    $('html, body').animate({
        scrollTop: $(div).offset().top
    }, 500);
  });
};

var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
