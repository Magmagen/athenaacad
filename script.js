let text = document.getElementById("text");
let parallax = document.getElementById("parallax");

window.addEventListener("scroll", () => {
    let value = window.scrollY;

    text.style.top = value * 0.25 + "px";
    parallax.style.top = value * 0.5 + "px";
});

