// =====================================================
// Portfolio — JavaScript mínimo
// 1) Menú móvil  2) Botón día/noche  3) Año del footer
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

// ----- 2) Botón día/noche -----

// El tema activo se guarda en el atributo data-theme de <html>.
// La primera visita la decide el pequeño <script> del <head>
// (según la preferencia del sistema); este botón la cambia y
// recuerda la elección en localStorage.

const themeToggle = document.getElementById("theme-toggle");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  themeToggle.setAttribute(
    "aria-label",
    theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"
  );
}

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  applyTheme(isDark ? "light" : "dark");
});

// ----- 3) Año del footer (se actualiza cada año solo) -----

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();
