const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");
const offCanvas = document.querySelector(".offcanvas");

menuIcon.addEventListener("click", () => {
    offCanvas.style.display = 'block'
});

closeIcon.addEventListener('click', () => {
    offCanvas.style.display = 'none'
})
