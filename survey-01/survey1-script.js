let answ1;
let answ2;
let answ3;
let answ4;

// $(function(){
//   $(".bottom-navigation").addClass("posiziona");
// });

// Carica html quando tutta la pagina è caricata
// $(() => {

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
      $(".knob").css('background-color', '#80a2ff');
      answ1 = "1";
    } else if (newLeftWidth >= 20 & newLeftWidth < 40) {
      $("#domanda-risposta1").html("Abbastanza in disaccordo");
      $(".knob").css('background-color', '#afa8b2');
      answ1 = "2";
    } else if (newLeftWidth >= 40 & newLeftWidth < 60) {
      $("#domanda-risposta1").html("Né d'accordo né in disaccordo");
      $(".knob").css('background-color', '#c5ab9d');
      answ1 = "3";
    } else if (newLeftWidth >= 60 & newLeftWidth < 80) {
      $("#domanda-risposta1").html("Sono abbastanza d'accordo");
      $(".knob").css('background-color', '#dfae7a');
      answ1 = "4";
    } else if (newLeftWidth >= 80 & newLeftWidth <= 100) {
      $("#domanda-risposta1").html("Sono molto d'accordo");
      $(".knob").css('background', 'radial-gradient(50% 50% at 50% 50%, #F9B156 0%, rgba(249, 177, 86, 0) 100%)');

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
      $(".knob").css('background', 'radial-gradient(50% 50% at 50% 50%, #82A2FB 0%, rgba(130, 162, 251, 0) 100%)');
      answ1 = "1";
    } else if (newLeftWidth >= 20 & newLeftWidth < 40) {
      $("#domanda-risposta1").html("Abbastanza in disaccordo");
      $(".knob").css('background', 'radial-gradient(50% 50% at 50% 50%, #AEA8BE 0%, rgba(174, 168, 190, 0) 100%)');
      answ1 = "2";
    } else if (newLeftWidth >= 40 & newLeftWidth < 60) {
      $("#domanda-risposta1").html("Né d'accordo né in disaccordo");
      $(".knob").css('background', 'radial-gradient(50% 50% at 50% 50%, #C7AB9B 0%, rgba(199, 171, 155, 0) 100%)');
      answ1 = "3";
    } else if (newLeftWidth >= 60 & newLeftWidth < 80) {
      $("#domanda-risposta1").html("Sono abbastanza d'accordo");
      $(".knob").css('background', 'radial-gradient(50% 50% at 50% 50%, #DEAE7B 0%, rgba(222, 174, 123, 0) 100%)');
      answ1 = "4";
    } else if (newLeftWidth >= 80 & newLeftWidth <= 100) {
      $("#domanda-risposta1").html("Sono molto d'accordo");
      $(".knob").css('background', 'radial-gradient(50% 50% at 50% 50%, #F9B156 0%, rgba(249, 177, 86, 0) 100%)');

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
    }
  });

  swiper.on('slideChange', function() {

    ////// FINE DOMANDA 1 //////
    ////// INIZIO DOMANDA 2 //////
    if (this.activeIndex === 1) {
      $(".avanti").removeClass("spariscibottone");
      $(".knob").css('background', '#ffede6');
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
          $(".knob").css('background-color', '#18c3b2');
          answ2 = "1";
        } else if (newLeftWidth >= 25 & newLeftWidth < 50) {
          $("#domanda-risposta2").html("Meno di 5");
          $(".knob").css('background-color', '#65a69d');
          answ2 = "2";
        } else if (newLeftWidth >= 50 & newLeftWidth < 75) {
          $("#domanda-risposta2").html("Tra 5 e 10");
          $(".knob").css('background-color', '#b18a88');
          answ2 = "3";
        } else if (newLeftWidth >= 70 & newLeftWidth <= 100) {
          $("#domanda-risposta2").html("Più di 10");
          $(".knob").css('background-color', '#fd6e73');
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
          $(".knob").css('background-color', '#18c3b2');
          answ2 = "1";
        } else if (newLeftWidth >= 25 & newLeftWidth < 50) {
          $("#domanda-risposta2").html("Meno di 5");
          $(".knob").css('background-color', '#65a69d');
          answ2 = "2";
        } else if (newLeftWidth >= 50 & newLeftWidth < 75) {
          $("#domanda-risposta2").html("Tra 5 e 10");
          $(".knob").css('background-color', '#b18a88');
          answ2 = "3";
        } else if (newLeftWidth >= 70 & newLeftWidth <= 100) {
          $("#domanda-risposta2").html("Più di 10");
          $(".knob").css('background-color', '#fd6e73');
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
      $(".knob").css('background-color', '#ffede6');
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
          $(".knob").css('background-color', '#dffafb');
          answ3 = "1";
        } else if (newLeftWidth >= 33 & newLeftWidth < 66) {
          $("#domanda-risposta3").html("Non so");
          $(".knob").css('background-color', '#84969e');
          answ3 = "2";
        } else if (newLeftWidth >= 66 & newLeftWidth <= 100) {
          $("#domanda-risposta3").html("Si");
          $(".knob").css('background-color', '#293241');
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
          $(".knob").css('background-color', '#dffafb');
          answ3 = "1";
        } else if (newLeftWidth >= 33 & newLeftWidth < 66) {
          $("#domanda-risposta3").html("Non so");
          $(".knob").css('background-color', '#84969e');
          answ3 = "2";
        } else if (newLeftWidth >= 66 & newLeftWidth <= 100) {
          $("#domanda-risposta3").html("Si");
          $(".knob").css('background-color', '#293241');
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
      $(".knob").css('background-color', '#ffede6');

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

// });
