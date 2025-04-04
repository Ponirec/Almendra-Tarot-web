function highlightActiveMenu() {
  const menuLinks = document.querySelectorAll('.header__menu__link');
  const currentPath = window.location.pathname;

  menuLinks.forEach(link => {
    const linkPath = link.getAttribute('href');

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

document.addEventListener("DOMContentLoaded", () => {
  console.log("menuactivo.js is working");
  document.body.classList.add("page-loaded");

  const links = document.querySelectorAll("a[href]");

  links.forEach(link => {
    const href = link.getAttribute("href");

    if (!href || href.startsWith("#") || href.startsWith("javascript")) return;

    link.addEventListener("click", function (e) {
      const linkUrl = new URL(href, window.location.href);
      const currentUrl = new URL(window.location.href);

      // Comparamos solo el pathname
      if (linkUrl.pathname !== currentUrl.pathname) {
        document.body.classList.remove("page-loaded");
        setTimeout(() => {
          window.location.assign(linkUrl.href);
        }, 500);
      }
      // Si es la misma página, dejamos que el navegador maneje el clic (no hacemos nada)
    });
  });

  // hamburguesa
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }
});
