const cartas = [
    { 
      nombre: "El Loco", 
      imagen: "img/Elloco.png", 
      significado: "Simboliza nuevos comienzos, aventura y libertad." 
    },
    { 
      nombre: "El Mago", 
      imagen: "img/Elmago.png", 
      significado: "Representa habilidad, creatividad e inicio." 
    },
    { 
      nombre: "La Sacerdotisa", 
      imagen: "img/Lasacerdotiza.png", 
      significado: "Sabiduría, intuición y conocimiento oculto." 
    },
    { 
      nombre: "La Emperatriz", 
      imagen: "img/Laemperatriz.png", 
      significado: "Fertilidad, amor y abundancia." 
    },
    { 
      nombre: "El papa", 
      imagen: "img/Elpapa.png", 
      significado: "Estructura, normas y conección espiritual." 
    },
    { 
      nombre: "El emperador", 
      imagen: "img/Elemperador.png", 
      significado: "Rigidez, autoridad y poder." 
    },
    {
      nombre: "Los Enamorados",
      imagen: "img/Losenamorados.png",
      significado: "Amor, decisiones, unión y armonía.",
    },
    {
      nombre: "El Carro",
      imagen: "img/Elcarro.png",
      significado: "Éxito, voluntad, movimiento y autocontrol.",
    },
    {
      nombre: "La Justicia",
      imagen: "img/Lajusticia.png",
      significado: "Equilibrio, verdad, justicia y responsabilidad.",
    },
    {
      nombre: "El Ermitaño",
      imagen: "img/Elermitaño.png",
      significado: "Soledad, reflexión, introspección y sabiduría.",
    },
    {
      nombre: "La Rueda de la Fortuna",
      imagen: "img/Larueda.png",
      significado: "Cambios, ciclos, destino y suerte.",
    },
    {
      nombre: "La Fuerza",
      imagen: "img/Lafuerza.png",
      significado: "Coraje, dominio, energía y pasión.",
    },
    {
      nombre: "El Colgado",
      imagen: "img/Elcolgado.png",
      significado: "Sacrificio, pausa, espera y otra perspectiva.",
    },
    {
      nombre: "La Muerte",
      imagen: "img/Lamuerte.png",
      significado: "Transformación, final de un ciclo y renacimiento.",
    },
    {
      nombre: "La Templanza",
      imagen: "img/Latemplanza.png",
      significado: "Paciencia, equilibrio, armonía y adaptación.",
    },
    {
      nombre: "El Diablo",
      imagen: "img/ElDiablo.png",
      significado: "Apego, lujuria, tentación y esclavitud.",
    },
    {
      nombre: "La Torre",
      imagen: "img/Latorre.png",
      significado: "Crisis, cambio radical, destrucción y caos.",
    },
    {
      nombre: "La Estrella",
      imagen: "img/Laestrella.png",
      significado: "Esperanza, fe, inspiración y renovación.",
    },
    {
      nombre: "La Luna",
      imagen: "img/Laluna.png",
      significado: "Ilusión, confusión, intuición y lo inconsciente.",
    },
    {
      nombre: "El Sol",
      imagen: "img/Elsol.png",
      significado: "Felicidad, vitalidad, éxito y claridad.",
    },
    {
      nombre: "El Juicio",
      imagen: "img/Eljuicio.png",
      significado: "Evaluación, despertar, perdón y llamado.",
    },
    {
      nombre: "El Mundo",
      imagen: "img/Elmundo.png",
      significado: "Plenitud, culminación, integración y totalidad.",
    },
  ];
  
  document.getElementById("mostrarCarta").addEventListener("click", function() {
    const cartaAleatoria = cartas[Math.floor(Math.random() * cartas.length)];
    const cartaElemento = document.getElementById("cartaMostrada");
  
    // Agregamos la carta con animación
    cartaElemento.innerHTML = `
      <div class="carta">
        <h2>${cartaAleatoria.nombre}</h2>
        <img src="${cartaAleatoria.imagen}" alt="${cartaAleatoria.nombre}">
        <p>${cartaAleatoria.significado}</p>
      </div>
    `;
  
    // Aplicamos animación
    cartaElemento.classList.remove("fade-in");
    void cartaElemento.offsetWidth; // Hack para reiniciar animación
    cartaElemento.classList.add("fade-in");
  });

  