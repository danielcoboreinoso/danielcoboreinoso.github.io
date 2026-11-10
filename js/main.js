// =====================================================
// Portfolio — JavaScript mínimo
// 1) Menú móvil  2) Año del footer
// =====================================================

// ----- 1) Menú móvil (hamburguesa) -----

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  // .open muestra el menú (ver css/styles.css)
  const isOpen = menu.classList.toggle("open");
  toggle.classList.toggle("open", isOpen);

  // Atributos de accesibilidad: informan a lectores de pantalla
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});

// Al pulsar un enlace del menú, este se cierra solo
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menú");
  });
});

// ----- 2) Año del footer (se actualiza cada año solo) -----

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();
