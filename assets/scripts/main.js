function scroll(scrollLink, scrollDiv){
  $(scrollLink).click(function (){
    $('html, body').animate({
        scrollTop: $(scrollDiv).offset().top
    }, 500);
  });
};

$(document).ready(function (){
  scroll('#about-us-link', '#about-us');
  scroll('#services-link', '#services');
  scroll('#work-link', '#work');
  scroll('#team-link', '#team');
  scroll('#contact-link', '#contact');
});
