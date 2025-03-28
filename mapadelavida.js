// Significados de las cartas
/*
const meanings = {
    "El Loco": "Comienzo del viaje, libertad, inocencia, potencial puro.",
    "El Mago": "Acción, poder, habilidades, manifestación.",
    "La Sacerdotisa": "Intuición, sabiduría interior, misterio, lo oculto."
  };
  
  // Modal de carta
  const cards = document.querySelectorAll(".tarot-card");
  const modal = document.getElementById("cardModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalMeaning = document.getElementById("modalMeaning");
  const closeModal = document.getElementById("closeModal");
  
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const cardName = card.getAttribute("data-card");
      modalTitle.textContent = cardName;
      modalMeaning.textContent = meanings[cardName] || "Significado en construcción...";
      modal.style.display = "flex";
    });
  });*/
  
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
  
  // "Mi viaje" - sugerencia de etapa
  const form = document.getElementById("formViaje");
  const resultado = document.getElementById("resultadoViaje");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const p1 = document.getElementById("pregunta1").value;
    const p2 = document.getElementById("pregunta2").value;
    const p3 = document.getElementById("pregunta3").value;
  
    let mensaje = "";
  
    if (p1 === "si" && p2 === "no") {
      mensaje = "Estás al comienzo de tu viaje: como El Loco o El Mago.";
    } else if (p2 === "si" && p3 === "no") {
      mensaje = "Te encuentras en un proceso de transformación interna: como La Sacerdotisa o La Muerte.";
    } else if (p3 === "si") {
      mensaje = "Estás llegando al final del ciclo: El Mundo o El Sol te acompañan.";
    } else {
      mensaje = "Tu camino es único. Escucha tu intuición y sigue explorando.";
    }
  
    resultado.textContent = mensaje;
  });
  