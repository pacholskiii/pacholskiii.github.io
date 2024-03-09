let btn = document.querySelector(".hamburger");
let links = document.querySelector(".nav-links");
let container = document.querySelector(".home-container")

btn.addEventListener('click', () => {
    links.classList.toggle("active");
    container.classList.toggle("active2")
}); 