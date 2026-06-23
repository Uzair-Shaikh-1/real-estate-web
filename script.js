const hamburger = document.querySelector(".ri-menu-line")
const nav = document.querySelector(".middle")

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active")
})