if (window.matchMedia("(max-width: 768px)").matches) {
  // código solo para pantallas pequeñas
  console.log("Estás en móvil o pantalla chica");
}

function highlightActiveMenu() {
    const menuLinks = document.querySelectorAll('.header__menu__link');
    const currentPath = window.location.pathname;

    menuLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        // Normalize paths for comparison
        const normalizedCurrentPath = currentPath === '/' ? '/index.html' : currentPath;
        const normalizedLinkPath = '/' + linkPath;

        if (normalizedCurrentPath === normalizedLinkPath) {
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
  
    // Agrega transición al hacer clic en enlaces
    const links = document.querySelectorAll("a");
    links.forEach(link => {
      if (link.getAttribute("href") && !link.getAttribute("href").startsWith("#")) {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          const url = this.href;
          document.body.classList.remove("page-loaded");
          setTimeout(() => {
            window.location.href = url;
          }, 500); // coincide con el tiempo del fade-out
        });
      }
    });
  });
  
  