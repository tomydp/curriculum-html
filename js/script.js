// =========================
// CV INTERACTIVO
// =========================

// ---- MODO OSCURO / CLARO ----
const toggleBtn = document.getElementById("toggleTheme");
const body = document.body;

// Cargar preferencia guardada
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
}

// Cambiar tema
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});

// ---- BOTÓN IMPRIMIR ----
document.getElementById("printCV").addEventListener("click", () => {
  window.print();
});

// ---- SCROLL SUAVE ----
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ---- ANIMACIÓN DE APARICIÓN ----
window.addEventListener("load", () => {
  document.querySelector(".resume").classList.add("show");
});
