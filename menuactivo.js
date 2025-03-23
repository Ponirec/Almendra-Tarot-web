function highlightActiveMenu() {
    const menuLinks = document.querySelectorAll('.header__menu__link');
    const currentPath = window.location.pathname;
  
    menuLinks.forEach(link => {
      const linkPath = link.getAttribute('href');
  
      // Normalize paths for comparison
      const normalizedCurrentPath = currentPath === '/' ? '/index.html' : currentPath; // Add leading slash for comparison
      const normalizedLinkPath = '/' + linkPath;
  
      if (normalizedCurrentPath === normalizedLinkPath) {
        link.classList.add('active');
        link.style.boxShadow = 'none';
      } else {
        link.classList.remove('active');
        link.style.boxShadow = 'inset 0 -5px 0 var(--color-primario)';
      }
    });
  }
  
  window.addEventListener('load', highlightActiveMenu);
  window.addEventListener('popstate', highlightActiveMenu);
  