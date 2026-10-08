// Magnifique Safaris — shared interactions

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => links.classList.remove('open'))
    );
  }

  // Booking form
  const form = document.getElementById('booking-form');
  if (form) {
    const confirmPanel = document.getElementById('booking-confirm');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const name = form.querySelector('#name').value.trim().split(' ')[0];
      const destination = form.querySelector('#destination');
      const destLabel = destination.options[destination.selectedIndex].text;
      confirmPanel.querySelector('.confirm-name').textContent = name;
      confirmPanel.querySelector('.confirm-dest').textContent = destLabel;
      confirmPanel.classList.add('show');
      form.reset();
      confirmPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  // Set min date on date inputs to today
  const dateInputs = document.querySelectorAll('input[type="date"]');
  const today = new Date().toISOString().split('T')[0];
  dateInputs.forEach(input => input.setAttribute('min', today));
});
