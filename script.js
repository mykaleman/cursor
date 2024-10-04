const cursor = document.querySelector(".cursor");

// Listen for mouse movements
document.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX;

  const mouseY = event.clientY;
  console.log("mouseX:", mouseX);
  console.log("mouseY:", mouseY);

  // Set the cursor element to the mouse's position
  cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});
