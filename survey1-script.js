// Carica html quando tutta la pagina è caricata
$(() => {
  $("#menuToggle input").click(function() {
    $("body").toggleClass("fixed-position");
  });

  // Query the element
  const knob = document.getElementById("knob");
  const leftSide = knob.previousElementSibling;
  const rightSide = knob.nextElementSibling;
  console.log('knob', knob)
  console.log('leftSide', leftSide)
  console.log('rightSide', rightSide)


  // The current position of mouse
  let x = 0;
  let y = 0;
  let leftWidth = 0;

  // Handle the mousedown event
  // that's triggered when user drags the knob
  const mouseDownHandler = function(e) {
    // Get the current mouse position
    x = e.clientX;
    y = e.clientY;
    leftWidth = leftSide.getBoundingClientRect().width;

    // Attach the listeners to `document`
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = function(e) {
    // How far the mouse has been moved
    const dx = e.clientX - x;
    const dy = e.clientY - y;
    // console.log('x', x, 'y', y)
    // console.log('dx', dx, 'dy', dy)

    const containerWidth = knob.parentNode.getBoundingClientRect().width;
    let newLeftWidth = ((leftWidth + dx) * 100) / containerWidth;
    newLeftWidth = Math.max(newLeftWidth, 0);
    newLeftWidth = Math.min(newLeftWidth, 100);

    if (newLeftWidth >= 0 & newLeftWidth < 20) {
      $(".domanda-risposta").html("Molto in disaccordo");
    } else if (newLeftWidth >= 20 & newLeftWidth < 40) {
      $(".domanda-risposta").html("Abbastanza in disaccordo");
    } else if (newLeftWidth >= 40 & newLeftWidth < 60) {
      $(".domanda-risposta").html("Né d'accordo né in disaccordo");
    } else if (newLeftWidth >= 60 & newLeftWidth < 80) {
      $(".domanda-risposta").html("Sono abbastanza d'accordo");
    } else if (newLeftWidth >= 80 & newLeftWidth <= 100) {
      $(".domanda-risposta").html("Sono molto d'accordo");
    }

    leftSide.style.width = `${newLeftWidth}%`;

    leftSide.style.userSelect = "none";
    leftSide.style.pointerEvents = "none";

    rightSide.style.userSelect = "none";
    rightSide.style.pointerEvents = "none";

    $("div").removeClass("noncliccabile");
  };

  // Triggered when user drops the knob

  const mouseUpHandler = function() {
    leftSide.style.removeProperty("user-select");
    leftSide.style.removeProperty("pointer-events");

    rightSide.style.removeProperty("user-select");
    rightSide.style.removeProperty("pointer-events");

    // Remove the handlers of `mousemove` and `mouseup`
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };

  // Attach the handler
  knob.addEventListener("mousedown", mouseDownHandler);

  $('#knob').on('click touchstart', () => {
    // console.log('ammerda')
    console.log(knob.getBoundingClientRect())
  })

  // $('.avanti').on('click', () => {
  //   // console.log('ammerda')
  //   $("button").addClass("noncliccabile");
  // })

  const touchDownHandler = function(e) {
    // Get the current mouse position
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;
    leftWidth = leftSide.getBoundingClientRect().width;

    // Attach the listeners to `document`
    document.addEventListener("touchmove", touchMoveHandler);
    document.addEventListener("touchend", touchUpHandler);
  };

  const touchMoveHandler = function(e) {
    const dx = e.touches[0].clientX - x;
    const dy = e.touches[0].clientY - y;
    // console.log('x', x, 'y', y)
    // console.log('dx', dx, 'dy', dy)

    const containerWidth = knob.parentNode.getBoundingClientRect().width;
    let newLeftWidth = ((leftWidth + dx) * 100) / containerWidth;
    newLeftWidth = Math.max(newLeftWidth, 0);
    newLeftWidth = Math.min(newLeftWidth, 100);
    if (newLeftWidth >= 0 & newLeftWidth < 20) {
      $(".domanda-risposta").html("Molto in disaccordo");
    } else if (newLeftWidth >= 20 & newLeftWidth < 40) {
      $(".domanda-risposta").html("Abbastanza in disaccordo");
    } else if (newLeftWidth >= 40 & newLeftWidth < 60) {
      $(".domanda-risposta").html("Né d'accordo né in disaccordo");
    } else if (newLeftWidth >= 60 & newLeftWidth < 80) {
      $(".domanda-risposta").html("Sono abbastanza d'accordo");
    } else if (newLeftWidth >= 80 & newLeftWidth <= 100) {
      $(".domanda-risposta").html("Sono molto d'accordo");
    }

    console.log('newLeftWidth', newLeftWidth);
    leftSide.style.width = `${newLeftWidth}%`;

    leftSide.style.userSelect = "none";
    leftSide.style.pointerEvents = "none";

    rightSide.style.userSelect = "none";
    rightSide.style.pointerEvents = "none";

    $("div").removeClass("noncliccabile");
  };

  // Triggered when user drops the knob

  const touchUpHandler = function() {
    leftSide.style.removeProperty("user-select");
    leftSide.style.removeProperty("pointer-events");

    rightSide.style.removeProperty("user-select");
    rightSide.style.removeProperty("pointer-events");

    // Remove the handlers of `touchmove` and `touchup`
    document.removeEventListener("touchmove", touchMoveHandler);
    document.removeEventListener("touchend", touchUpHandler);
  };


  $('#knob').on('touchstart', touchDownHandler);


// Initialize Swiper

    var swiper = new Swiper(".mySwiper", {
      noSwiping: true,
      noSwipingClass: "swiper-slide",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });


});
