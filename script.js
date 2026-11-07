document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  // Small demo form interaction for the student project.
  const form = document.querySelector('#contactForm');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.querySelector('#name')?.value.trim() || 'Rider';
      alert(`Thank you, ${name}! Zakir Motors will get back to you soon.`);
      form.reset();
    });
  }
});
