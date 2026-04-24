// Typing
const text = "Sumanta";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();

window.addEventListener("scroll", revealOnScroll);

// Terminal
const terminalText = "Accessing system...\nWelcome, Red Teamer 😈";
let j = 0;

function terminalEffect() {
    if (j < terminalText.length) {
        document.getElementById("terminal-text").innerHTML += terminalText.charAt(j);
        j++;
        setTimeout(terminalEffect, 30);
    }
}
terminalEffect();
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);