// Add a click listener to each of the size button
export const addSizeSelectEvent = (sizesForSelecting) =>
  Array.from(sizesForSelecting.children).forEach((sizeButton) =>
    sizeButton.addEventListener('click', () => {
      if (sizeButton.classList.contains('selected'))
        sizeButton.classList.remove('selected');
      else sizeButton.classList.add('selected');
    })
  );

// When an user changes a picture on the image menu panel, the page should update the main product images
export const addImageSelectEvent = (imagesForSelecting, selectedImage) => {
  imagesForSelecting.forEach((image) => {
    image.addEventListener('click', () => {
      // update already created img of product image settings
      selectedImage.children[0].src = image.src;
      selectedImage.children[0].alt = image.alt;

      // Update already created selected image on image menu panel
      imagesForSelecting.forEach((i) => i.classList.remove('selected'));
      image.classList.add('selected');
    });
  });
};

// When an user changes a picture on the color menu panel, the page should update the product images menu and the product info text
export const addColorSelectEvent = (
  colorsForSelecting,
  imagesForSelecting,
  sizesForSelecting,
  selectedImageContainer,
  productTitleContainer,
  productPriceContainer,
  products
) => {
  colorsForSelecting.forEach((color) => {
    color.addEventListener('click', (e) => {
      const chosenColor = e.target?.id;

      if (products[chosenColor]) {
        // Update text info about chosen product
        productTitleContainer.innerText = products[chosenColor]?.title;
        productPriceContainer.innerText = products[chosenColor]?.price;

        // Update product images menu panel for chosen color product
        imagesForSelecting.forEach((img, imageIndex) => {
          img.src = products[chosenColor]['image-menu'][imageIndex];
        });
        // Reset chosen image from image menu panel for previous product
        imagesForSelecting.forEach((i) => i.classList.remove('selected'));

        // Update image main of product image settings
        selectedImageContainer.children[0].src =
          products[chosenColor]['image-main'];
        selectedImageContainer.children[0].alt = products[chosenColor].alt;

        // Update already created selected image on image menu panel
        imagesForSelecting.forEach((i) => i.classList.remove('selected'));
        // Mark as selected the first image at image menu as the main product image
        imagesForSelecting[0].classList.add('selected');

        // Update info about available sizes for chosen product color
        setSizesCollection(products[chosenColor], sizesForSelecting);

        // Update selected color on color menu panel
        colorsForSelecting.forEach((i) => i.classList.remove('selected'));
        // Mark as selected chosen color at color menu panel
        colorsForSelecting[chosenColor].classList.add('selected');
      }
    });
  });
};

// all possible sizes for selected product should be added to html page
const setSizesCollection = (product, sizesForSelecting) => {
  Array.from(sizesForSelecting.children).forEach((sizeItem) => {
    sizeItem?.classList?.remove('available');
    sizeItem?.classList?.remove('disabled');
    sizeItem?.classList?.remove('selected');
  });

  Array.from(sizesForSelecting.children).forEach((size) => {
    if (product.sizes.includes(size.innerHTML)) {
      size.classList.add('available');
    } else {
      size.classList.add('disabled');
    }
  });
};
