// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml

const btn = document.getElementById("btn");

const sideBar = document.getElementById("side-bar");

const content = document.querySelector(".content");

const toggleBtn = document.querySelector(".toggle-btn");

btn.addEventListener("click", () => {
  sideBar.classList.toggle("active");
});

content.addEventListener("click", () => {
  sideBar.classList.remove("active");
});
