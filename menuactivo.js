
function highlightActiveMenu() {
    const menuLinks = document.querySelectorAll('.header__menu__link');
    const currentPath = window.location.pathname;

    menuLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        // Normalize paths for comparison
        const normalizedCurrentPath = currentPath === '/' ? '/index.html' : currentPath;
        const normalizedLinkPath = linkPath === currentPath || 
        (currentPath === '/' && linkPath === 'index.html') ||
        (currentPath.endsWith('/') && linkPath === 'index.html');


        if (normalizedLinkPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

window.addEventListener('load', highlightActiveMenu);
window.addEventListener('popstate', highlightActiveMenu);

// Espera a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-loaded");

  const links = document.querySelectorAll("a[href]");

  links.forEach(link => {
    const href = link.getAttribute("href");

    // Ignora enlaces internos o vacíos
    if (!href || href.startsWith("#") || href.startsWith("javascript")) return;

    link.addEventListener("click", function (e) {
      const linkUrl = new URL(href, window.location.href);
      const currentUrl = new URL(window.location.href);

      // Compara solo pathname (pero normalizado a minúsculas por seguridad)
      if (linkUrl.pathname.toLowerCase() !== currentUrl.pathname.toLowerCase()) {
        e.preventDefault();
        document.body.classList.remove("page-loaded");
        setTimeout(() => {
          window.location.href = linkUrl.href;
        }, 500);
      }
    });
  });
});
