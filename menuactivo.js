function highlightActiveMenu() {
  const menuLinks = document.querySelectorAll('.header__menu__link');
  const currentPath = window.location.pathname.replace(/\/$/, '');

  menuLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    const linkPath = '/' + linkHref.replace(/^\/|\.html$/g, '');
    const current = currentPath.replace(/^\/|\.html$/g, '');

    if (linkPath === current) {
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

