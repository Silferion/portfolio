/**
* Google Apps Script Email Form Integration
* Customized from BootstrapMade PHP Email Form
*/
(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach(function (e) {
  e.addEventListener('submit', async function (event) {
    event.preventDefault();

    let thisForm = this;
    let action = "https://script.google.com/macros/s/AKfycbzXPMWk0-CaHJoZQB_FXu94vPPj1FKCYFEkYGCh5yBkFC_OrLvT9TfXfo2EDJ2PN7PvYQ/exec"; 

    thisForm.querySelector('.loading').classList.add('d-block');
    thisForm.querySelector('.error-message').classList.remove('d-block');
    thisForm.querySelector('.sent-message').classList.remove('d-block');

    // Collect form data
    let formData = {
      name: thisForm.querySelector('[name="name"]').value,
      email: thisForm.querySelector('[name="email"]').value,
      subject: thisForm.querySelector('[name="subject"]').value,
      message: thisForm.querySelector('[name="message"]').value
    };

    try {
      // Convert formData to query string
      let queryString = new URLSearchParams(formData).toString();

      // Send with fetch like Axios does
      let response = await fetch(action + '?' + queryString, {
        method: 'POST'
      });

      if (!response.ok) throw new Error('Network response was not ok');

      thisForm.querySelector('.loading').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.add('d-block');
    } catch (error) {
      thisForm.querySelector('.loading').classList.remove('d-block');
      thisForm.querySelector('.error-message').classList.add('d-block');
      console.error('Form submission error:', error);
    }
  });
});


  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }

})();
