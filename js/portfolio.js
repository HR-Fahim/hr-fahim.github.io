/* Optional enhancements; navigation and downloads work without JavaScript. */
(() => {
  'use strict';
  const links = [...document.querySelectorAll('nav [data-nav-section]')];
  const activate = (id) => links.forEach((link) => {
    if (link.dataset.navSection === id) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  links.forEach((link) => link.addEventListener('click', () => activate(link.dataset.navSection)));
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activate(entry.target.dataset.section);
      });
    }, { rootMargin: '-18% 0px -65% 0px', threshold: 0 });
    document.querySelectorAll('section[data-section]').forEach((section) => observer.observe(section));
  }
  document.querySelector('#year').textContent = new Date().getFullYear();

  const copyButton = document.querySelector('[data-copy-email]');
  const copyStatus = document.querySelector('#copy-status');
  if (copyButton && window.isSecureContext && navigator.clipboard?.writeText) {
    copyButton.hidden = false;
    copyButton.addEventListener('click', async () => {
      copyButton.disabled = true;
      copyButton.setAttribute('aria-busy', 'true');
      try {
        await navigator.clipboard.writeText(copyButton.dataset.copyEmail);
        copyStatus.textContent = 'Email address copied.';
        copyStatus.dataset.state = 'success';
        copyButton.querySelector('span').textContent = 'Copied';
      } catch {
        copyStatus.textContent = 'Copy is unavailable here. You can select the email address instead.';
        copyStatus.dataset.state = 'error';
        copyButton.querySelector('span').textContent = 'Copy email';
      } finally {
        copyButton.disabled = false;
        copyButton.removeAttribute('aria-busy');
      }
    });
  }
})();
