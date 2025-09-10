# shopify-school-homepage-yuliia-kulinich
Test task for shopify school

## How to run project:
Clone git repo.
Open an terminal on project folder and run the next commands
> npm install

> npm start


Demo link is [here](link)

## Використані технології та плагіни:
HTML, CSS, JS, Webpack5, Swiper. 
Є адаптивість, секція Product Card інтерактивна із зміною даних про товари.

## Використані прaвила оформлення імен:
id - camelCase, 
імена змінних в js коді - camelCase, 
css classes - One Dashes style

## Що можна покращити, якби було більше часу:
1. Використовувати SCSS, це б скоротило код та покращило б його читабельність через вкладені класи. Можна було б задати кольори окремими параметрами.
2. На product page, початковий обраний товар за замовчанням оголосити використовуючи дані із файлу із даними, а не вписувати напряму в html коді.
Це зробило б код більш універсальним (усі дані внесені леше в одному місці - файл data/products.js) та не требе було задавати перший товар ще й в розмітці.
3. В деякий компонентах із списками повторюється html розмітка для опису елементів списку (наприклад featured collection секція). 
Цю проблему копіювання однакового коду можна вирішити через використання templates:

```
<div class="product-list">
  <% const products = [
    { id: "0", name: "Nike Streakfly 2", price: "300", image: "/images/products/image-product-acrt4-main.png"},
    { id: "1", name: "Nike Pegasus Premium", price: "350", image: "/images/products/image-product-arct1-main.png"},
    { id: "2", name: "Nike Pegasus 41", price: "280", image: "/images/products/image-product-acrt2-main.png"},
    { id: "3", name: "Nike Revolution 7", price: "440", image: "/images/products/image-product-acrt3-main.png"},
    { id: "4", name: "Nike Air Max Plus", price: "280", image: "/images/products/image-pink-main.png"},
    { id: "5", name: "Nike Streakfly 2", price: "300", image: "/images/products/image-white-main.png"},
    { id: "6", name: "Nike Streakfly 2", price: "300", image: "/images/products/image-product-acrt4-main.png"},
    { id: "7", name: "Nike Streakfly 2", price: "300", image: "/images/products/image-product-acrt4-main.png"},
    ];
  %>
  <div class="swiper" id="featuredCollection">
    <div class="swiper-wrapper">
      <% products.forEach(product => { %>
      <div class="swiper-slide"> 
        <div class="product-card">
          <div class="product-wrapper">
            <img src="<%= product.image %>" alt="white nike sneakers">
            <div class="product-info poppins-regular">
              <p class="product-name"><%= product.name %></p>
              <p class="product-price">$<%= product.price %></p>
            </div>
          </div>
        </div>
      </div>
      <% }) %>
```

Файл треба переіменовати index.html -> index.ejs. Також треба обновити webpack.config.js. 
Цей метод працює та правильно генерує строрінку, проте щоб відібражались картинки, потрібно перенести усі картинки в папку public.
Це може бути досить неконфедиційно для деяких товарів та картинок, тому від цієї ідеї я відмовилась. 

4. Footer, мобільна версія. У мобільній версії, компоненти із лінками повинні бути в аккордеонах, а не в колонках. Це можна зробити:
- або зробивши два блока розмітки (один із колонками, інший із аккордеонами), показувати та кривати відповідний в залежності від ширини екрану. Проте це додасть багато копипасту контенту (а там його багато в футері);
- або через використання js функції, яка використовує контент в розмітці та змінює відповідний тип тегів в залежності від ширини екрану. Наразі ця функція  працює коректно лише для варіанту коли сторінка одразу відкрита мобільному або широкоформатному варіанті. При зміненювані ширини вікна зʼявляються зайві перерендери. Цей код є в коментаряхх в файлі index.js
 
