// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", () => {
  console.log("Haven Café Menu Page Loaded! ☕");

  // Select all menu list items
  const menuItems = document.querySelectorAll(".styled-list li");

  // Add hover and click effects
  menuItems.forEach(item => {
    // When hovered
    item.addEventListener("mouseenter", () => {
      item.style.backgroundColor = "violet";
      item.style.color = "black";
      item.style.transform = "scale(1.03)";
      item.style.transition = "0.3s";
    });

    // When mouse leaves
    item.addEventListener("mouseleave", () => {
      item.style.backgroundColor = "#555";
      item.style.color = "white";
      item.style.transform = "scale(1)";
    });

    // When clicked
    item.addEventListener("click", () => {
      alert(`You selected: ${item.querySelector("strong").textContent} ☕`);
    });
  });
});
