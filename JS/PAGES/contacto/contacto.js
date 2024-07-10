"use strict";



const btn = document.getElementById('send');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.textContent = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_wh7n675';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.textContent = 'Enviar';
      alert('Enviado!');
    }, (err) => {
      btn.textContent = 'Enviar';
      alert(JSON.stringify(err));
    });
});