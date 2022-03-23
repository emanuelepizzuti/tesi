document.addEventListener("DOMContentLoaded", function () {
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
  const mouseDownHandler = function (e) {
    // Get the current mouse position
    x = e.clientX;
    y = e.clientY;
    leftWidth = leftSide.getBoundingClientRect().width;

    // Attach the listeners to `document`
    document.addEventListener("touchmove", mouseMoveHandler);
    document.addEventListener("touchend", mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - x;
    const dy = e.clientY - y;


    const containerWidth = knob.parentNode.getBoundingClientRect().width;
    let newLeftWidth = ((leftWidth + dx) * 100) / containerWidth;
    newLeftWidth = Math.max(newLeftWidth, 0);
    newLeftWidth = Math.min(newLeftWidth, 100);
    console.log(newLeftWidth);

    leftSide.style.width = `${newLeftWidth}%`;

    leftSide.style.userSelect = "none";
    leftSide.style.pointerEvents = "none";

    rightSide.style.userSelect = "none";
    rightSide.style.pointerEvents = "none";
  };

  // Triggered when user drops the knob
  const mouseUpHandler = function () {
    leftSide.style.removeProperty("user-select");
    leftSide.style.removeProperty("pointer-events");

    rightSide.style.removeProperty("user-select");
    rightSide.style.removeProperty("pointer-events");

    // Remove the handlers of `mousemove` and `mouseup`
    document.removeEventListener("touchmove", mouseMoveHandler);
    document.removeEventListener("touchend", mouseUpHandler);
  };

  // Attach the handler
  knob.addEventListener("touchstart", mouseDownHandler);

  $('#knob').on('click',()=>{
    console.log('ammerda')
  })
});
