function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

// Dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// Scroll animation
let faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    faders.forEach(el => {
        let top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            el.classList.add("show");
        }
    });
});