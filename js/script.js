const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("overlayMenu");
const menuClose = document.getElementById("menuClose");

function openMenu() {
  menu.classList.add("is-open");
  menuBtn.setAttribute("aria-expanded", "true");
  menu.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeMenu() {
  menu.classList.remove("is-open");
  menuBtn.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

menuBtn.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);

// cerrar si clickeás fuera del panel
menu.addEventListener("click", (e) => {
  if (e.target === menu) closeMenu();
});

// ESC para cerrar
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

