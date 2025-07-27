// Grab the body element so we can listen for mouse movements on it
const bodyEl = document.querySelector("body");

// Listen for mouse movement anywhere on the page
bodyEl.addEventListener("mousemove", (event) => {
  // Get exact mouse coordinates - clientX/Y gives us position relative to viewport
  const xPos = event.clientX;
  const yPos = event.clientY;

  // Create a new heart element every time the mouse moves
  const spanEl = document.createElement("span");

  // Position the heart exactly where the mouse is
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";

  // Make each heart a random size between 0-100px for variety
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";

  // Add the heart to the page so it becomes visible
  bodyEl.appendChild(spanEl);

  // Remove the heart after 2 seconds to prevent memory issues
  // This matches our animation duration perfectly
  setTimeout(() => {
    spanEl.remove();
  }, 2000);
});
