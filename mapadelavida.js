// "Mi viaje" - sugerencia de etapa
const form = document.getElementById("formViaje");
const resultado = document.getElementById("resultadoViaje");

const etapas = {
  comienzo: ["El Loco", "El Mago"],
  transformacion: ["La Sacerdotisa", "La Muerte"],
  cierre: ["El Mundo", "El Sol"],
  neutro: ["La Estrella", "La Templanza", "La Justicia"]
};

const cartasConImagen = {
  "El Loco": "img/Elloco.png",
  "El Mago": "img/Elmago.png",
  "La Sacerdotisa": "img/Lasacerdotisa.png",
  "La Muerte": "img/Lamuerte.png",
  "El Mundo": "img/Elmundo.png",
  "El Sol": "img/Elsol.png",
  "La Estrella": "img/Laestrella.png",
  "La Templanza": "img/Latemplanza.png",
  "La Justicia": "img/Lajusticia.png"
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const p1 = document.getElementById("pregunta1").value;
  const p2 = document.getElementById("pregunta2").value;
  const p3 = document.getElementById("pregunta3").value;

  let mensaje = "";
  let etapa = "neutro";

  if ((p1 === "si" || p1 === "aveces") && p2 === "no") {
    mensaje = "Estás al comienzo de tu viaje: como El Loco o El Mago.";
    etapa = "comienzo";
  } else if ((p2 === "si" || p2 === "aveces") && p3 === "no") {
    mensaje = "Te encuentras en un proceso de transformación interna: como La Sacerdotisa o La Muerte.";
    etapa = "transformacion";
  } else if (p3 === "si" || p3 === "aveces") {
    mensaje = "Estás llegando al final del ciclo: El Mundo o El Sol te acompañan.";
    etapa = "cierre";
  } else {
    mensaje = "Tu camino es único. Escucha tu intuición y sigue explorando.";
    etapa = "neutro";
  }

  const cartaAleatoria = etapas[etapa][Math.floor(Math.random() * etapas[etapa].length)];
  const imagenCarta = cartasConImagen[cartaAleatoria];

  resultado.innerHTML = `
  <div class="carta fade-in">
    <h3>${cartaAleatoria}</h3>
    <img src="${imagenCarta}" alt="${cartaAleatoria}" style="max-width: 250px; border-radius: 10px; margin-top: 10px;">
    <p style="margin-top: 15px;">${mensaje}</p>
  </div>
`;


  // 🚀 Auto scroll hacia el resultado
  const offset = 100;
  const yCoordinate = resultado.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = yCoordinate - offset;

  window.scrollTo({
    top: yOffset,
    behavior: "smooth"
  });
});

  