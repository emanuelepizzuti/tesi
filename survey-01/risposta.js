window.onload = function get() {
  // (A) GET THE PARAMETERS
  var params = new URLSearchParams(window.location.search),
    answ1 = params.get("answ1"),
    answ2 = params.get("answ2"),
    answ3 = params.get("answ3"),
    answ4 = params.get("answ4");
  // second = JSON.parse(params.get("second"));

  // (B) IT WORKS!
  console.log(answ1); // Foo Bar
  console.log(answ2); // ["Hello", "World"]
  console.log(answ3);
  console.log(answ4);

  if (answ1 === "1" || answ1 === "2") {
    $("#risposta-uno").html("...non vedi il fenomeno dell’immigrazione come un problema...");
  } else if (answ1 === "3") {
    $("#risposta-uno").html("...non hai una posizione rispetto al fenomeno...");
  } else if (answ1 === "4" || answ1 === "5") {
    $("#risposta-uno").html("...vedi il fenomeno dell’immigrazione come un problema\...");
  }

  if (answ2 === "1") {
    $("#risposta-due").html("...non conosci persone coinvolte nel fenomeno...");
  } else if (answ2 === "2") {
    $("#risposta-due").html("...conosci poche persone coinvolte nel fenomeno...");
  } else if (answ2 === "3") {
    $("#risposta-due").html("...conosci persone coinvolte nel fenomeno...");
  } else if (answ2 === "4") {
    $("#risposta-due").html("...conosci molte persone coinvolte nel fenomeno...");
  }

  if (answ3 === "1" || answ3 === "2") {
    $("#risposta-tre").html("...forse dovresti fare più attenzione a ciò che leggi...");
  } else if (answ3 === "3") {
    $("#risposta-tre").html("...sei attento rispetto a ciò che leggi...");
  }

  if (answ4 === "1") {
    $("#risposta-quattro").html("...infine, conosci la portata del fenomeno. Ma molte persone sbagliano, perché?");
  } else if (answ4 === "2" || answ4 === "3" || answ4 === "4") {
    $("#risposta-quattro").html("...infine, sopravvaluti la portata del fenomeno. Ma alcune persone sbagliano più di te!");
  }
}

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  direction: "vertical",
  mousewheel: true,
  navigation: {
    nextEl: ".swiper-button-next"
  }
});

swiper.on('slideChange', function() {
  if (this.activeIndex === 4) {
    console.log("IM ON fourth SLIDE!");
    $(".avanti").addClass("spariscibottone");
  } else {
    $(".avanti").removeClass("spariscibottone");
  }
})
