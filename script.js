const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => { const open = nav.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); });

document.querySelector('#application-form').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#form-note').textContent = 'Design-test klar! Nästa steg är att koppla formuläret till en riktig lagring eller Discord-webhook.';
});
