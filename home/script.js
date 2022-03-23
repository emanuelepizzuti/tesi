// gsap.registerPlugin(ScrollTrigger);
//
// ScrollTrigger.defaults({
//   scroller: ".container"
// });
//
// gsap.to("#text2", {
//   scrollTrigger: "#text2",
//   duration: 1
// });
//
// gsap.to("#text3", {
//   scrollTrigger: "#text3",
//   duration: 1
// });
$("#menuToggle input").click(function() {
  $("body").toggleClass("fixed-position");
});
