import './styles/reset.css';
import './styles/main.css';

import './styles/components/header.css';
import './styles/components/swiper.css';
import './styles/components/featured-collection.css';
import './styles/components/faq.css';
import './styles/components/help.css';

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
