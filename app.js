const addCartButtons = document.querySelectorAll('.add-cart');
const cartCount = document.querySelector('.cart-item-count');
const miniCart = document.getElementById('mini-cart');
const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartIcon = document.getElementById('cart-icon');
const closeCartBtn = document.getElementById('close-cart');
const overlay = document.getElementById('overlay');

let cartCountNumber = 0;
const cartItems = [];

function renderMiniCart() {
  cartItemsList.innerHTML = '';
  let total = 0;
  cartItems.forEach((item,index)=>{
    total += parseFloat(item.price);
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="cart-item">
        <img src="${item.image}" class="cart-item-img" alt="${item.name}">
        <div class="cart-item-details">
          <span class="cart-item-name">${item.name}</span>
          <span class="cart-item-price">$${item.price}</span>
        </div>
        <button class="remove-item" data-index="${index}">&times;</button>
      </div>
    `;
    cartItemsList.appendChild(li);
  });
  cartTotal.innerHTML = `<strong>Total:</strong> $${total.toFixed(2)}`;

  cartItemsList.querySelectorAll('.remove-item').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const index = btn.dataset.index;
      cartItems.splice(index,1);
      cartCountNumber--;
      cartCount.textContent = cartCountNumber;
      renderMiniCart();
    });
  });
}

addCartButtons.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const name = btn.dataset.name;
    const price = parseFloat(btn.dataset.price).toFixed(2);
    const image = btn.dataset.image;

    cartCountNumber++;
    cartCount.textContent = cartCountNumber;
    cartItems.push({name,price,image});
    renderMiniCart();

    miniCart.classList.add('open');
    overlay.style.display = 'block';
  });
});

cartIcon.addEventListener('click', ()=>{
  miniCart.classList.add('open');
  overlay.style.display = 'block';
});

closeCartBtn.addEventListener('click', ()=>{
  miniCart.classList.remove('open');
  overlay.style.display = 'none';
});

overlay.addEventListener('click', ()=>{
  miniCart.classList.remove('open');
  overlay.style.display = 'none';
});
