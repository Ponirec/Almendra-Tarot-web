function highlightActiveMenu() {
  const menuLinks = document.querySelectorAll('.header__menu__link');
  const currentPath = window.location.pathname;

  menuLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    const linkUrl = new URL(linkHref, window.location.origin);
    const linkPath = linkUrl.pathname.replace(/\/$/, '').toLowerCase();
    const current = currentPath.replace(/\/$/, '').toLowerCase();

    console.log('🧪 Comparando...');
    console.log('→ linkHref:', linkHref);
    console.log('→ linkPath:', linkPath);
    console.log('→ current:', current);


    if (linkPath === current || (current === '/index.html' && linkPath === '/')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}


window.addEventListener('load', highlightActiveMenu);
window.addEventListener('popstate', highlightActiveMenu);

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-loaded");

  const links = document.querySelectorAll("a[href]");

  links.forEach(link => {
    const href = link.getAttribute("href");

    if (!href || href.startsWith("#") || href.startsWith("javascript")) return;

    link.addEventListener("click", function (e) {
      const linkUrl = new URL(href, window.location.href);
      const currentUrl = new URL(window.location.href);

      if (linkUrl.pathname !== currentUrl.pathname) {
        document.body.classList.remove("page-loaded");
        setTimeout(() => {
          window.location.assign(linkUrl.href);
        }, 500);
      }
    });
  });

  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }
});

