import './styles/reset.css';
import './styles/main.css';

import './styles/components/header.css';
import './styles/components/swiper.css';
import './styles/components/featured-collection.css';
import './styles/components/faq.css';
import './styles/components/help.css';
import './styles/components/footer.css';
import './styles/components/product-card.css';

import { products } from './data/products.js';
import {
  addSizeSelectEvent,
  addImageSelectEvent,
  addColorSelectEvent,
} from './scripts/services/productCard.js';
import {
  swiperHero,
  swiperFeaturedCollection,
} from './scripts/services/swiperConfig.js';

// Process the entered user user form data
const helpForm = document.getElementById('help-form');
helpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const { name, email, phone, message } = helpForm.elements;
  console.log(
    `Data from form: name = ${name.value}, email = ${email.value}, phone = ${phone.value}, message = ${message.value}`
  );
  alert('Thank you!');
  helpForm.reset();
});

// Make the product card section be interactive
const selectedImageContainer = document.getElementById('productImage'); // selected image from image menu panel
const imagesForSelecting = document.querySelectorAll('.product-image-menu img'); // image panel for every product
const sizesForSelecting = document.getElementById('sizeCollection'); // size panel for every product
const colorsForSelecting = document.querySelectorAll('.product-color-menu img');

const productTitleContainer = document.getElementById('productTitle');
const productPriceContainer = document.getElementById('productPrice');

// Add a click listener to each of the size button
addSizeSelectEvent(sizesForSelecting);

// When an user changes a picture on the image menu panel, the page should update the main product images
addImageSelectEvent(
  imagesForSelecting,
  selectedImageContainer,
  sizesForSelecting
);

// When an user changes a picture on the color menu panel, the page should update the product images menu and the product info text
addColorSelectEvent(
  colorsForSelecting,
  imagesForSelecting,
  sizesForSelecting,
  selectedImageContainer,
  productTitleContainer,
  productPriceContainer,
  products
);
