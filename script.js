// List of products in order
const products = [
  "Vigan Longganisa",
  "Bagnet",
  "Vigan Okoy",
  "Royal Bibingka",
  "Sinanglao",
  "Tinubong",
  "Ilocos Garlic",
  "Abel Ilocano",
  "Ilocos Cornick",
  "Sukang Iloco",
  "Kalamay",
  "Tobacco"
];

// Add Event Listeners for Add buttons
for (let i = 1; i <= 12; i++) {
  document.getElementById("button" + i).addEventListener("click", function() {
    addCart(i);
  });

  document.getElementById("b" + i).addEventListener("click", function() {
    removeCart(i);
  });
}

// Function to Add to Cart
function addCart(index) {
  alert("✅ " + products[index - 1] + " added to cart!");
}

// Function to Remove from Cart
function removeCart(index) {
  alert("❌ " + products[index - 1] + " removed from cart!");
}


document.getElementById('buttons').addEventListener('click,subMit');

function subMit(){
    alert("Successfully sent a message")
    alert("Thank ou for messaging us")
}
