const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const gift = document.getElementById("gift");
const opening = document.getElementById("opening");

let musicPlaying = false;
let giftOpened = false;


/* =========================
   SAAT WEBSITE DIBUKA
========================= */

window.addEventListener("load", () => {

    /* AUTO PLAY */

    music.play()
        .then(() => {

            musicPlaying = true;
            musicBtn.innerHTML = "❚❚";

        })
        .catch(() => {

            musicPlaying = false;
            musicBtn.innerHTML = "♫";

        });

});


/* =========================
   KLIK KADO
========================= */

if (gift) {

    gift.addEventListener("click", () => {

        if (giftOpened) return;

        giftOpened = true;

        openGift();

    });

}


/* =========================
   OPEN GIFT
========================= */

function openGift() {

    if (!gift) return;

    gift.classList.add("opened");

    createFlowerExplosion();

    setTimeout(() => {

        opening.style.opacity = "0";

    }, 1800);

}


/* =========================
   BUNGA KELUAR
========================= */

function createFlowerExplosion() {

    const flowers = [
        "🌸",
        "🌹",
        "🌺",
        "🌷",
        "🌼",
        "🌻",
        "💐",
        "🌸",
        "🌹",
        "🌺",
        "🌷",
        "🌼",
        "🌸",
        "🌹",
        "🌺",
        "🌷",
        "🌼",
        "🌻",
        "💐",
        "🌸",
        "🌹",
        "🌺",
        "🌷",
        "🌼"
    ];

    flowers.forEach((flower, index) => {

        const element =
            document.createElement("span");

        element.className =
            "explosion-flower";

        element.innerHTML =
            flower;


        const angle =
            Math.random() *
            Math.PI * 2;

        const distance =
            100 +
            Math.random() * 320;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;


        element.style.setProperty(
            "--x",
            x + "px"
        );

        element.style.setProperty(
            "--y",
            y + "px"
        );

        element.style.setProperty(
            "--rotate",
            (Math.random() * 720 - 360) + "deg"
        );

        element.style.animationDelay =
            (index * 0.035) + "s";


        document.body.appendChild(element);


        setTimeout(() => {

            element.remove();

        }, 2500);

    });

}


/* =========================
   TOMBOL MUSIK
========================= */

musicBtn.addEventListener("click", async () => {

    if (music.paused) {

        try {

            await music.play();

            musicPlaying = true;
            musicBtn.innerHTML = "❚❚";

        } catch(error) {

            console.log("Musik tidak dapat diputar.");

        }

    } else {

        music.pause();

        musicPlaying = false;
        musicBtn.innerHTML = "♫";

    }

});


/* =========================
   FALLING PETALS
========================= */

function createPetal() {

    const petal =
        document.createElement("div");

    petal.className = "petal";

    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.animationDuration =
        (7 + Math.random() * 8) + "s";


    const size =
        5 + Math.random() * 5;

    petal.style.width =
        size + "px";

    petal.style.height =
        size * 1.5 + "px";


    document.body.appendChild(petal);


    setTimeout(() => {

        petal.remove();

    }, 16000);

}


setInterval(createPetal, 700);