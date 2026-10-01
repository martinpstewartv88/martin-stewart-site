// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const navList = document.getElementById('nav-list');
if (toggle && navList) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    navList.classList.toggle('open', !open);
  });
  navList.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      toggle.setAttribute('aria-expanded', 'false');
      navList.classList.remove('open');
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navList.classList.contains('open')) {
      toggle.setAttribute('aria-expanded', 'false');
      navList.classList.remove('open');
      toggle.focus();
    }
  });
}

// Footer year
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Contact form: builds an email and opens it in the visitor's own email app.
// Nothing is sent to or stored by this website.
const form = document.getElementById('contact-form');
if (form) {
  const errorBox = document.getElementById('form-error');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fields = ['name', 'email', 'message'].map((id) => form.elements[id]);
    const invalid = fields.filter((f) => !f.value.trim() || !f.checkValidity());

    fields.forEach((f) => f.setAttribute('aria-invalid', invalid.includes(f) ? 'true' : 'false'));
    if (invalid.length) {
      errorBox.textContent = 'Please fill in your name, a valid email address and a short message.';
      errorBox.hidden = false;
      invalid[0].focus();
      return;
    }
    errorBox.hidden = true;

    const name = form.elements.name.value.trim();
    const org = form.elements.org.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    const subject = `Free 30-minute chat${org ? ` – ${org}` : ''}`;
    const body = [
      `Name: ${name}`,
      org ? `Organisation: ${org}` : null,
      `Email: ${email}`,
      '',
      "What's taking up too much of my time:",
      message,
    ].filter((line) => line !== null).join('\n');

    const to = form.dataset.email;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
