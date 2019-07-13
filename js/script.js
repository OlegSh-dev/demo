$(document).ready(function(){
  $("#toggle-contributers").on("click", function() {
    $(".contributers__list").toggleClass("contributers__list--hide");
    $(".btn-primary").toggleClass("active");
  });
  
  $('.img-roll').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });
  
  const names = ["DenRo", "Oleg Sh"]; // add name to array!!!

  function createLi(name, parent) {
    const contributersListName = document.createElement("li");
    contributersListName.classList.add("contributers__list-name");
    contributersListName.textContent = name;
    parent.appendChild(contributersListName);
    return contributersListName;
  }
  function init() {
    const contributersList = document.querySelector(".contributers__list");
    for (i = 0; i < names.length; i++) {
      createLi(names[i], contributersList);
    }
  }
  init();
});
