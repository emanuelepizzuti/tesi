let answ1;
let answ2;
let answ3;
let answ4;

// Carica html quando tutta la pagina è caricata
$(() => {
  function go() {}

  $("#menuToggle input").click(function() {
    $("body").toggleClass("fixed-position");
  });

  ////// INIZIO DOMANDA 1 //////
  // Query the element
  const knob = document.getElementById("knob");
  const leftSide = knob.previousElementSibling;
  const rightSide = knob.nextElementSibling;

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
      $("#domanda-risposta1").html("Molto in disaccordo");
      answ1 = "1";
    } else if (newLeftWidth >= 20 & newLeftWidth < 40) {
      $("#domanda-risposta1").html("Abbastanza in disaccordo");
      answ1 = "2";
    } else if (newLeftWidth >= 40 & newLeftWidth < 60) {
      $("#domanda-risposta1").html("Né d'accordo né in disaccordo");
      answ1 = "3";
    } else if (newLeftWidth >= 60 & newLeftWidth < 80) {
      $("#domanda-risposta1").html("Sono abbastanza d'accordo");
      answ1 = "4";
    } else if (newLeftWidth >= 80 & newLeftWidth <= 100) {
      $("#domanda-risposta1").html("Sono molto d'accordo");
      answ1 = "5";
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
    console.log(knob.getBoundingClientRect())
  })

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

    const containerWidth = knob.parentNode.getBoundingClientRect().width;
    let newLeftWidth = ((leftWidth + dx) * 100) / containerWidth;
    newLeftWidth = Math.max(newLeftWidth, 0);
    newLeftWidth = Math.min(newLeftWidth, 100);
    if (newLeftWidth >= 0 & newLeftWidth < 20) {
      $("#domanda-risposta1").html("Molto in disaccordo");
      answ1 = "1";
    } else if (newLeftWidth >= 20 & newLeftWidth < 40) {
      $("#domanda-risposta1").html("Abbastanza in disaccordo");
      answ1 = "2";
    } else if (newLeftWidth >= 40 & newLeftWidth < 60) {
      $("#domanda-risposta1").html("Né d'accordo né in disaccordo");
      answ1 = "3";
    } else if (newLeftWidth >= 60 & newLeftWidth < 80) {
      $("#domanda-risposta1").html("Sono abbastanza d'accordo");
      answ1 = "4";
    } else if (newLeftWidth >= 80 & newLeftWidth <= 100) {
      $("#domanda-risposta1").html("Sono molto d'accordo");
      answ1 = "5";
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

  swiper.on('slideChange', function() {

    ////// FINE DOMANDA 1 //////
    ////// INIZIO DOMANDA 2 //////
    if (this.activeIndex === 1) {
      $(".avanti").removeClass("spariscibottone");

      console.log("IM ON second SLIDE!");

      const knob = document.getElementById("knob2");
      const leftSide = knob.previousElementSibling;
      const rightSide = knob.nextElementSibling;

      let x = 0;
      let y = 0;
      let leftWidth = 0;

      const mouseDownHandler = function(e) {
        x = e.clientX;
        y = e.clientY;
        leftWidth = leftSide.getBoundingClientRect().width;

        document.addEventListener("mousemove", mouseMoveHandler);
        document.addEventListener("mouseup", mouseUpHandler);
      };

      const mouseMoveHandler = function(e) {
        const dx = e.clientX - x;
        const dy = e.clientY - y;

        const containerWidth = knob.parentNode.getBoundingClientRect().width;
        let newLeftWidth = ((leftWidth + dx) * 100) / containerWidth;
        newLeftWidth = Math.max(newLeftWidth, 0);
        newLeftWidth = Math.min(newLeftWidth, 100);

        if (newLeftWidth >= 0 & newLeftWidth < 25) {
          $("#domanda-risposta2").html("Nessuna");
          answ2 = "1";
        } else if (newLeftWidth >= 25 & newLeftWidth < 50) {
          $("#domanda-risposta2").html("Meno di 5");
          answ2 = "2";
        } else if (newLeftWidth >= 50 & newLeftWidth < 75) {
          $("#domanda-risposta2").html("Tra 5 e 10");
          answ2 = "3";
        } else if (newLeftWidth >= 70 & newLeftWidth <= 100) {
          $("#domanda-risposta2").html("Più di 10");
          answ2 = "4";
        }

        leftSide.style.width = `${newLeftWidth}%`;
        leftSide.style.userSelect = "none";
        leftSide.style.pointerEvents = "none";
        rightSide.style.userSelect = "none";
        rightSide.style.pointerEvents = "none";

        $("div").removeClass("noncliccabile");
      };

      const mouseUpHandler = function() {
        leftSide.style.removeProperty("user-select");
        leftSide.style.removeProperty("pointer-events");
        rightSide.style.removeProperty("user-select");
        rightSide.style.removeProperty("pointer-events");

        document.removeEventListener("mousemove", mouseMoveHandler);
        document.removeEventListener("mouseup", mouseUpHandler);
      };

      knob.addEventListener("mousedown", mouseDownHandler);

      $('#knob2').on('click touchstart', () => {
        console.log(knob.getBoundingClientRect())
      })

      const touchDownHandler = function(e) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
        leftWidth = leftSide.getBoundingClientRect().width;

        document.addEventListener("touchmove", touchMoveHandler);
        document.addEventListener("touchend", touchUpHandler);
      };

      const touchMoveHandler = function(e) {
        const dx = e.touches[0].clientX - x;
        const dy = e.touches[0].clientY - y;

        const containerWidth = knob.parentNode.getBoundingClientRect().width;
        let newLeftWidth = ((leftWidth + dx) * 100) / containerWidth;
        newLeftWidth = Math.max(newLeftWidth, 0);
        newLeftWidth = Math.min(newLeftWidth, 100);
        if (newLeftWidth >= 0 & newLeftWidth < 25) {
          $("#domanda-risposta2").html("Nessuna");
          answ2 = "1";
        } else if (newLeftWidth >= 25 & newLeftWidth < 50) {
          $("#domanda-risposta2").html("Meno di 5");
          answ2 = "2";
        } else if (newLeftWidth >= 50 & newLeftWidth < 75) {
          $("#domanda-risposta2").html("Tra 5 e 10");
          answ2 = "3";
        } else if (newLeftWidth >= 70 & newLeftWidth <= 100) {
          $("#domanda-risposta2").html("Più di 10");
          answ2 = "4";
        }

        console.log('newLeftWidth', newLeftWidth);
        leftSide.style.width = `${newLeftWidth}%`;
        leftSide.style.userSelect = "none";
        leftSide.style.pointerEvents = "none";
        rightSide.style.userSelect = "none";
        rightSide.style.pointerEvents = "none";

        $("div").removeClass("noncliccabile");
      };

      const touchUpHandler = function() {
        leftSide.style.removeProperty("user-select");
        leftSide.style.removeProperty("pointer-events");

        rightSide.style.removeProperty("user-select");
        rightSide.style.removeProperty("pointer-events");

        document.removeEventListener("touchmove", touchMoveHandler);
        document.removeEventListener("touchend", touchUpHandler);
      };

      $('#knob2').on('touchstart', touchDownHandler);
    }
    ////// FINE DOMANDA 2 //////
    ////// INIZIO DOMANDA 3 //////
    else if (this.activeIndex === 2) {
      $(".avanti").removeClass("spariscibottone");
      console.log("IM ON third SLIDE!");

      const knob = document.getElementById("knob3");
      const leftSide = knob.previousElementSibling;
      const rightSide = knob.nextElementSibling;

      let x = 0;
      let y = 0;
      let leftWidth = 0;

      const mouseDownHandler = function(e) {
        x = e.clientX;
        y = e.clientY;
        leftWidth = leftSide.getBoundingClientRect().width;

        document.addEventListener("mousemove", mouseMoveHandler);
        document.addEventListener("mouseup", mouseUpHandler);
      };

      const mouseMoveHandler = function(e) {
        const dx = e.clientX - x;
        const dy = e.clientY - y;

        const containerWidth = knob.parentNode.getBoundingClientRect().width;
        let newLeftWidth = ((leftWidth + dx) * 100) / containerWidth;
        newLeftWidth = Math.max(newLeftWidth, 0);
        newLeftWidth = Math.min(newLeftWidth, 100);

        if (newLeftWidth >= 0 & newLeftWidth < 33) {
          $("#domanda-risposta3").html("No");
          answ3 = "1";
        } else if (newLeftWidth >= 33 & newLeftWidth < 66) {
          $("#domanda-risposta3").html("Non so");
          answ3 = "2";
        } else if (newLeftWidth >= 66 & newLeftWidth <= 100) {
          $("#domanda-risposta3").html("Si");
          answ3 = "3";
        }

        leftSide.style.width = `${newLeftWidth}%`;
        leftSide.style.userSelect = "none";
        leftSide.style.pointerEvents = "none";
        rightSide.style.userSelect = "none";
        rightSide.style.pointerEvents = "none";

        $("div").removeClass("noncliccabile");
      };

      const mouseUpHandler = function() {
        leftSide.style.removeProperty("user-select");
        leftSide.style.removeProperty("pointer-events");
        rightSide.style.removeProperty("user-select");
        rightSide.style.removeProperty("pointer-events");

        document.removeEventListener("mousemove", mouseMoveHandler);
        document.removeEventListener("mouseup", mouseUpHandler);
      };

      knob.addEventListener("mousedown", mouseDownHandler);

      $('#knob3').on('click touchstart', () => {
        console.log(knob.getBoundingClientRect())
      })

      const touchDownHandler = function(e) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
        leftWidth = leftSide.getBoundingClientRect().width;

        document.addEventListener("touchmove", touchMoveHandler);
        document.addEventListener("touchend", touchUpHandler);
      };

      const touchMoveHandler = function(e) {
        const dx = e.touches[0].clientX - x;
        const dy = e.touches[0].clientY - y;

        const containerWidth = knob.parentNode.getBoundingClientRect().width;
        let newLeftWidth = ((leftWidth + dx) * 100) / containerWidth;
        newLeftWidth = Math.max(newLeftWidth, 0);
        newLeftWidth = Math.min(newLeftWidth, 100);
        if (newLeftWidth >= 0 & newLeftWidth < 33) {
          $("#domanda-risposta3").html("No");
          answ3 = "1";
        } else if (newLeftWidth >= 33 & newLeftWidth < 66) {
          $("#domanda-risposta3").html("Non so");
          answ3 = "2";
        } else if (newLeftWidth >= 66 & newLeftWidth <= 100) {
          $("#domanda-risposta3").html("Si");
          answ3 = "3";
        }

        console.log('newLeftWidth', newLeftWidth);
        leftSide.style.width = `${newLeftWidth}%`;
        leftSide.style.userSelect = "none";
        leftSide.style.pointerEvents = "none";
        rightSide.style.userSelect = "none";
        rightSide.style.pointerEvents = "none";

        $("div").removeClass("noncliccabile");
      };

      const touchUpHandler = function() {
        leftSide.style.removeProperty("user-select");
        leftSide.style.removeProperty("pointer-events");

        rightSide.style.removeProperty("user-select");
        rightSide.style.removeProperty("pointer-events");

        document.removeEventListener("touchmove", touchMoveHandler);
        document.removeEventListener("touchend", touchUpHandler);
      };

      $('#knob3').on('touchstart', touchDownHandler);
    }
    ////// FINE DOMANDA 3 //////
    ////// INIZIO DOMANDA 4 //////
    else if (this.activeIndex === 3) {
      console.log("IM ON fourth SLIDE!");
      $(".avanti").addClass("spariscibottone");

      const knob = document.getElementById("knob4");
      const leftSide = knob.previousElementSibling;
      const rightSide = knob.nextElementSibling;

      let x = 0;
      let y = 0;
      let leftWidth = 0;

      const mouseDownHandler = function(e) {
        x = e.clientX;
        y = e.clientY;
        leftWidth = leftSide.getBoundingClientRect().width;

        document.addEventListener("mousemove", mouseMoveHandler);
        document.addEventListener("mouseup", mouseUpHandler);
      };

      const mouseMoveHandler = function(e) {
        const dx = e.clientX - x;
        const dy = e.clientY - y;

        const containerWidth = knob.parentNode.getBoundingClientRect().width;
        let newLeftWidth = ((leftWidth + dx) * 100) / containerWidth;
        newLeftWidth = Math.max(newLeftWidth, 0);
        newLeftWidth = Math.min(newLeftWidth, 100);

        if (newLeftWidth >= 0 & newLeftWidth < 20) {
          $("#domanda-risposta4").html("Meno del 10%");
          answ4 = "1";
        } else if (newLeftWidth >= 20 & newLeftWidth < 40) {
          $("#domanda-risposta4").html("Tra il 10% e il 20%");
          answ4 = "2";
        } else if (newLeftWidth >= 40 & newLeftWidth < 60) {
          $("#domanda-risposta4").html("Tra il 20% e il 30%");
          answ4 = "3";
        } else if (newLeftWidth >= 60 & newLeftWidth < 80) {
          $("#domanda-risposta4").html("Intorno al 50%");
          answ4 = "4";
        } else if (newLeftWidth >= 80 & newLeftWidth <= 100) {
          $("#domanda-risposta4").html("Più del 50%");
          answ4 = "5";
        }

        leftSide.style.width = `${newLeftWidth}%`;
        leftSide.style.userSelect = "none";
        leftSide.style.pointerEvents = "none";
        rightSide.style.userSelect = "none";
        rightSide.style.pointerEvents = "none";

        $("div").removeClass("noncliccabile");
      };

      const mouseUpHandler = function() {
        leftSide.style.removeProperty("user-select");
        leftSide.style.removeProperty("pointer-events");
        rightSide.style.removeProperty("user-select");
        rightSide.style.removeProperty("pointer-events");

        document.removeEventListener("mousemove", mouseMoveHandler);
        document.removeEventListener("mouseup", mouseUpHandler);
      };

      knob.addEventListener("mousedown", mouseDownHandler);

      $('#knob4').on('click touchstart', () => {
        console.log(knob.getBoundingClientRect())
      })

      const touchDownHandler = function(e) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
        leftWidth = leftSide.getBoundingClientRect().width;

        document.addEventListener("touchmove", touchMoveHandler);
        document.addEventListener("touchend", touchUpHandler);
      };

      const touchMoveHandler = function(e) {
        const dx = e.touches[0].clientX - x;
        const dy = e.touches[0].clientY - y;

        const containerWidth = knob.parentNode.getBoundingClientRect().width;
        let newLeftWidth = ((leftWidth + dx) * 100) / containerWidth;
        newLeftWidth = Math.max(newLeftWidth, 0);
        newLeftWidth = Math.min(newLeftWidth, 100);
        if (newLeftWidth >= 0 & newLeftWidth < 20) {
          $("#domanda-risposta4").html("Meno del 10%");
          answ4 = "1";
        } else if (newLeftWidth >= 20 & newLeftWidth < 40) {
          $("#domanda-risposta4").html("Tra il 10% e il 20%");
          answ4 = "2";
        } else if (newLeftWidth >= 40 & newLeftWidth < 60) {
          $("#domanda-risposta4").html("Tra il 20% e il 30%");
          answ4 = "3";
        } else if (newLeftWidth >= 60 & newLeftWidth < 80) {
          $("#domanda-risposta4").html("Intorno al 50%");
          answ4 = "4";
        } else if (newLeftWidth >= 80 & newLeftWidth <= 100) {
          $("#domanda-risposta4").html("Più del 50%");
          answ4 = "5";
        }

        console.log('newLeftWidth', newLeftWidth);
        leftSide.style.width = `${newLeftWidth}%`;
        leftSide.style.userSelect = "none";
        leftSide.style.pointerEvents = "none";
        rightSide.style.userSelect = "none";
        rightSide.style.pointerEvents = "none";

        $("div").removeClass("noncliccabile");
      };

      const touchUpHandler = function() {
        leftSide.style.removeProperty("user-select");
        leftSide.style.removeProperty("pointer-events");

        rightSide.style.removeProperty("user-select");
        rightSide.style.removeProperty("pointer-events");

        document.removeEventListener("touchmove", touchMoveHandler);
        document.removeEventListener("touchend", touchUpHandler);
      };

      $('#knob4').on('touchstart', touchDownHandler);
    }
    ////// FINE DOMANDA 4 //////

  });
  // function go() {
  //   console.log("PORCODDDDDD");
  // }

  $(".bottonefinalone").click(function() {
    console.log("answ1: " + answ1 + ", answ2: " + answ2 + ", answ3: " + answ3 + ", answ4: " + answ4);

    // parametri url
    var params = new URLSearchParams();
    params.append("answ1", answ1);
    params.append("answ2", answ2);
    params.append("answ3", answ3);
    params.append("answ4", answ4);

    // go!
    var url = "risposta.html?" + params.toString();
    location.href = url;
    // window.open(url);

  });

});
