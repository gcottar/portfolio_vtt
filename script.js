const text = "Guy COTTAR";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typed-text").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 400); // Ajustez la vitesse ici (en millisecondes)
  }
}

window.onload = typeWriter;
