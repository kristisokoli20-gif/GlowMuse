// Sticky header
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
});

const menuIcon = document.getElementById("menu-icon");
const menu = document.querySelector(".menu");

menuIcon.onclick = () => {
  menu.classList.toggle("active");
};


window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

sr.reveal('.home-text', { delay: 200, origin: 'top' });
sr.reveal('.home-img', { delay: 300, origin: 'top' });
sr.reveal('.feature, .product, .cta-content, .contact', { delay: 200, origin: 'top' });

// Login/Register switch
const container = document.querySelector('.container'); 
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});
document.addEventListener('DOMContentLoaded', () => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCountEl = document.getElementById('cart-count');

  function updateCartCount() {
    const totalQuantity = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCountEl.textContent = totalQuantity;
  }

  updateCartCount();

  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  addToCartButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name;
      const price = parseFloat(btn.dataset.price);
      const image = btn.dataset.image;
      const description = btn.dataset.description || ""; // optional

      const existing = cart.find(item => item.name === name);
      if (existing) {
        existing.qty++;
      } else {
        cart.push({ name, price, image, description, qty: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();

      cartCountEl.classList.add('bump');
      setTimeout(() => cartCountEl.classList.remove('bump'), 300);

      alert(`${name} added to cart!`);
    });
  });
});
