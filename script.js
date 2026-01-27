document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  function switchSection(id) {
    sections.forEach(s => s.classList.remove('active'));
    links.forEach(l => l.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelector(`[data-section="${id}"]`).classList.add('active');
    navLinks.classList.remove('open');
    window.scrollTo(0, 0);
  }

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      switchSection(link.dataset.section);
    });
  });

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
});
