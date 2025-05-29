
const cartCount = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsContainer = document.getElementById('cart-items');
const clearCartBtn = document.getElementById('clear-cart-btn');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartUI() {
    cartItemsContainer.innerHTML = '';
  
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `<p class="empty-cart-message">🛒 Your cart is empty.</p>`;
    } else {
      cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.classList.add('cart-item-card');
        li.innerHTML = `
        <div class="cart-item-content">
          <span>${item}</span>
        </div>
      `;
        cartItemsContainer.appendChild(li);
      });
    }
    cartCount.textContent = cart.length;
  }
  

cartCount.textContent = cart.length;


addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const roomName = button.getAttribute('data-name');
      cart.push(roomName);

      cartCount.textContent = cart.length;
      alert(`${roomName} added to your cart! 🎉`);

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
    });
  });
  
clearCartBtn.addEventListener('click', () => {
  if (confirm("Are you sure you want to clear your cart?")) {
    cart = [];
    localStorage.removeItem('cart');
    updateCartUI();
    cartCount.textContent = cart.length;

  }
});

updateCartUI();

