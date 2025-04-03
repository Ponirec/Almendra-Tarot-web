
function highlightActiveMenu() {
    const menuLinks = document.querySelectorAll('.header__menu__link');
    const currentPath = window.location.pathname;

    menuLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        // Normalize paths for comparison
        const normalizedCurrentPath = currentPath === '/' ? '/index.html' : currentPath;
        const normalizedLinkPath = window.location.pathname.includes(linkPath);

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

    // Ignora enlaces vacíos, anclas o scripts
    if (!href || href.startsWith("#") || href.startsWith("javascript")) return;

    const targetPath = new URL(href, window.location.origin).pathname;
    const currentPath = window.location.pathname;

    link.addEventListener("click", function (e) {
      if (targetPath !== currentPath) {
        // Diferente página: ejecuta transición
        e.preventDefault();
        document.body.classList.remove("page-loaded");
        setTimeout(() => {
          window.location.href = targetPath;
        }, 500);
      }
      // Si es igual, deja que el navegador recargue
    });
  });
});

  
  
  