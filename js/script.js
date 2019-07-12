$("#toggle-contributers").on("click", function() {
  $(".contributers__list").toggleClass("contributers__list--hide");
});


$(document).ready(function(){
  $('.img-roll').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });
});