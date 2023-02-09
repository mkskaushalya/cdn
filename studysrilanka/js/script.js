// Hambergar
const hamb = document.querySelector(".hamburger");
const topnav = document.querySelector(".top-navbar");
const mainnav = document.querySelector(".main-navbar");

hamb.addEventListener("click", () => {
    hamb.classList.toggle("active");
    topnav.classList.toggle("active");
    mainnav.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamb.classList.remove("active");
    topnav.classList.remove("active");
    mainnav.classList.remove("active");
}))