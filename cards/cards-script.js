$("#menuToggle input").click(function() {
  $("body").toggleClass("fixed-position");
});

$(document).ready(function() {
  $(".wall").show();
});

$(".wall-button").click(function() {
  $(".wall").hide();
});

      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 10,
        grabCursor: true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // }
      });
