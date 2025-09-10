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
} from './scripts/services/product-card.js';

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

// Change types of components with links at the footer from div to details according to changing window size by an user
const generateFooterDetails = () => {
  const isMobileWidth = window.innerWidth < 768;

  if (isMobileWidth) {
    console.log('here');
    const footerItems = [
      {
        datasetContainer: document.getElementById('footer-list-item-1'),
        summary:
          document.getElementById('footer-list-item-1')?.children[0]
            ?.textContent,
        content: document.getElementById('footer-list-item-1')?.children[1],
      },
      {
        datasetContainer: document.getElementById('footer-list-item-2'),
        summary:
          document.getElementById('footer-list-item-2')?.children[0]
            ?.textContent,
        content: document.getElementById('footer-list-item-2')?.children[1],
      },
      {
        datasetContainer: document.getElementById('footer-list-item-3'),
        summary:
          document.getElementById('footer-list-item-3')?.children[0]
            ?.textContent,
        content: document.getElementById('footer-list-item-3')?.children[1],
      },
      {
        datasetContainer: document.getElementById('footer-list-item-4'),
        summary:
          document.getElementById('footer-list-item-4')?.children[0]
            ?.textContent,
        content: document.getElementById('footer-list-item-4')?.children[1],
      },
    ];
    footerItems.forEach((item) => {
      const details = document.createElement('details');
      const summary = document.createElement('summary');

      summary.textContent = item.summary;

      details.appendChild(summary);
      details.appendChild(item?.content);
      details.className = 'footer-section-container';
      item.datasetContainer.innerHTML = '';
      item.datasetContainer.appendChild(details);
    });
  } else {
    //to-do add generation
  }
};

// window.addEventListener('resize', generateFooterDetails);
// window.addEventListener('load', generateFooterDetails);
