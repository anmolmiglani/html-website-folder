// script.js

//  modal elements
const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-button');

// event listeners for product details click and close button click
document.addEventListener('DOMContentLoaded', () => {
  const productDetailsBtns = document.querySelectorAll('.product-details');
  productDetailsBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  closeBtn.addEventListener('click', closeModal);
});

// Function to open modal
function openModal(event) {
  event.preventDefault();
  const productId = event.target.getAttribute('data-product-id');
  const productTitle = event.target.getAttribute('data-product-title');
  const productDescription = event.target.getAttribute('data-product-description');
  const productImage = event.target.getAttribute('data-product-image');

  // Updating modal content
  modal.querySelector('h3').textContent = productTitle;
  modal.querySelector('img').setAttribute("src", productImage);
  modal.querySelector('p').textContent = productDescription;

  // Show modal
  modalOverlay.style.opacity = '1';
  modalOverlay.style.visibility = 'visible';
  modal.style.opacity = '1';
  modal.style.transform = 'translateY(0)';
}

// Function to close modal
function closeModal() {
  modalOverlay.style.opacity = '0';
  modalOverlay.style.visibility = 'hidden';
  modal.style.opacity = '0';
  modal.style.transform = 'translateY(-20px)';
}
