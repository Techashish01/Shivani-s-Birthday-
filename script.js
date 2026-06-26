// Open Surprise
document.getElementById("startBtn").onclick = function () {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("main").style.display = "block";

    document.getElementById("song").play();

    createHearts();
};

// Love Timer
const startDate = new Date("July 04, 2022 00:00:00");

function updateTimer() {

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("loveTimer").innerHTML =
        days + " Days ❤️ " +
        hours + " Hours ❤️ " +
        minutes + " Minutes ❤️ " +
        seconds + " Seconds";
}

setInterval(updateTimer, 1000);
updateTimer();

// Photo Slideshow
let slideIndex = 0;

const slides = document.querySelectorAll(".slide");

function showSlides() {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slideIndex++;

    if (slideIndex > slides.length)
        slideIndex = 1;

    slides[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 3000);
}

showSlides();

// Typewriter Love Letter

const message =
`Happy Birthday My Dearest Shivani ❤️

From the day you came into my life,
everything became beautiful.

Thank you for always being with me.

You are my happiness,
my peace,
my smile,
my forever.

I promise to love you forever.

Happy Birthday My Queen ❤️

Forever Yours,
Ashish ❤️`;

let i = 0;

function typing() {

    if (i < message.length) {

        document.getElementById("typing").innerHTML += message.charAt(i);

        i++;

        setTimeout(typing, 50);
    }
}

typing();

// Floating Hearts

function createHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize = (20 + Math.random() * 25) + "px";

        heart.style.animationDuration = (3 + Math.random() * 4) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 7000);

    }, 250);

}