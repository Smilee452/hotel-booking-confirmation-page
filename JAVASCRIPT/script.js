const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebarBody = document.getElementById("sidebarBody");
const container = document.querySelector(".container");

menuBtn.addEventListener("click", () => {
  sidebarBody.classList.add("show");
  menuBtn.classList.add("hide");
  closeBtn.classList.add("show");
  container.classList.add("menu-open");
});

closeBtn.addEventListener("click", () => {
  sidebarBody.classList.remove("show");
  menuBtn.classList.remove("hide");
  closeBtn.classList.remove("show");
  container.classList.remove("menu-open");
});
