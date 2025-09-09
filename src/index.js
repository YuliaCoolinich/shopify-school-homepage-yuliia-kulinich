import './styles/reset.css';
import './styles/main.css';

import './styles/components/header.css';
import './styles/components/swiper.css';
import './styles/components/featured-collection.css';
import './styles/components/faq.css';
import './styles/components/help.css';
import './styles/components/footer.css';

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
