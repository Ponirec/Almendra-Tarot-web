
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

    // Ignora enlaces internos tipo #sección o javascript:void
    if (href.startsWith("#") || href.startsWith("javascript")) return;

    // Normalizá la URL para evitar errores de navegación
    const linkUrl = new URL(href, window.location.origin).href;
    const currentUrl = window.location.href;

    if (linkUrl !== currentUrl) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        document.body.classList.remove("page-loaded");

        setTimeout(() => {
          window.location.href = linkUrl;
        }, 500); // tiempo para la animación
      });
    }
  });
});
  
  // menu hamburguesa
  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
  
    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
      });
    }
  });
  
  
  