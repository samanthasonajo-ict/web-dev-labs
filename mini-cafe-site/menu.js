const drinks = [
  { name: "Cappuccino", desc: "Rich espresso with milk foam", price: "₱130" },
  { name: "Macchiato", desc: "Espresso with a dash of milk", price: "₱130" },
  { name: "Espresso", desc: "Classic strong coffee shot", price: "₱120" },
  { name: "Americano", desc: "Espresso with hot water", price: "₱140" },
  { name: "Matcha Latte", desc: "Green tea with creamy milk", price: "₱150" },
  { name: "Cookies & Cream Frappe", desc: "Sweet & creamy blended drink", price: "₱150" },
  { name: "Salted Caramel Frappe", desc: "Caramel goodness with a twist", price: "₱150" }
];

const pastries = [
  { name: "Croissant", desc: "Buttery and flaky French pastry", price: "₱89" },
  { name: "Blueberry Muffin", desc: "Soft muffin with blueberries", price: "₱99" },
  { name: "Chocolate Muffin", desc: "Rich chocolate delight", price: "₱99" },
  { name: "Carrot Cake", desc: "Moist cake with cream cheese", price: "₱199" },
  { name: "Egg Tuna Sandwich", desc: "Protein-packed sandwich", price: "₱60" },
  { name: "Ham & Cheese Sandwich", desc: "Classic filling choice", price: "₱60" }
];

const menuList = document.getElementById("menu-list");
const summaryText = document.getElementById("summary-text");

function createCategory(title, items) {
  const category = document.createElement("div");
  category.classList.add("menu-category");

  const heading = document.createElement("h2");
  heading.textContent = title;
  category.appendChild(heading);

  const itemContainer = document.createElement("div");
  itemContainer.classList.add("menu-items");

  items.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("menu-card");
    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <p class="price">${item.price}</p>
      <button class="order-btn">Order Now</button>
    `;
    card.querySelector(".order-btn").addEventListener("click", () => {
      alert(`You ordered ${item.name}!`);
      summaryText.textContent = `You ordered ${item.name}!`;
    });
    itemContainer.appendChild(card);
  });

  category.appendChild(itemContainer);
  return category;
}

// Render both categories side-by-side
menuList.appendChild(createCategory("☕ Drinks", drinks));
menuList.appendChild(createCategory("🍰 Pastries", pastries));
