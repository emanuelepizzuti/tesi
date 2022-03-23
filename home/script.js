// $("#menuToggle input").click(function() {
//   $("body").toggleClass("fixed-position");
// });

// PAGINA 1
window.addEventListener('scroll', function() {
  var element = document.querySelector('#text1');
  var position = element.getBoundingClientRect();

  // checking whether fully visible
  if (position.top >= 0 && position.bottom <= window.innerHeight) {
    console.log('text1 is fully visible in screen');
    $(".start").addClass("remove");
  }
  // checking for partial visibility
  if (position.top < window.innerHeight && position.bottom >= 0) {
    $(".start").addClass("remove");
  }
});
// PAGINA 2
window.addEventListener('scroll', function() {
  var element = document.querySelector('#text2');
  var position = element.getBoundingClientRect();

  // checking whether fully visible
  if (position.top >= 0 && position.bottom <= window.innerHeight) {
    console.log('text2 is fully visible in screen');
    $(".start").addClass("remove");
  }
  // checking for partial visibility
  if (position.top < window.innerHeight && position.bottom >= 0) {
    $(".start").addClass("remove");
  }
});
// PAGINA 3
window.addEventListener('scroll', function() {
  var element = document.querySelector('#text3');
  var position = element.getBoundingClientRect();

  // checking whether fully visible
  if (position.top >= 0 && position.bottom <= window.innerHeight) {
    console.log('text3 is fully visible in screen');
    $(".start").addClass("remove");
    $(".scrolldown").removeClass("remove");
  }
  // checking for partial visibility
  if (position.top < window.innerHeight && position.bottom >= 0) {
    $(".start").addClass("remove");
    $(".scrolldown").removeClass("remove");
  }
});
// PAGINA 4
window.addEventListener('scroll', function() {
  var element = document.querySelector('#text4');
  var position = element.getBoundingClientRect();

  // checking whether fully visible
  if (position.top >= 0 && position.bottom <= window.innerHeight) {
    console.log('text4 is fully visible in screen');
    $(".scrolldown").addClass("remove");
    $(".start").removeClass("remove");
  }
  // checking for partial visibility
  if (position.top < window.innerHeight && position.bottom >= 0) {
    $(".scrolldown").addClass("remove");
    $(".start").removeClass("remove");
  }
});
