const hamburger = document.querySelector(".menu-button");
const sidebar = document.querySelector(".sidebar");

hamburger.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("active");
  hamburger.innerHTML = isOpen ? "&times;" : "&#9776;";
});