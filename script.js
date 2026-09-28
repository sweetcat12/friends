const startButton = document.getElementById("startButton");


/* =========================================
   OPEN SCRAPBOOK
========================================= */

if (startButton) {

    startButton.addEventListener("click", () => {

        const intro = document.querySelector(".intro");

        if (intro) {

            intro.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".photo-section, .collage-section, .stats, .double-memory, .message, .final-photo-section"
);


const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================
   PREVENT IMAGE DRAGGING
========================================= */

const images = document.querySelectorAll("img");


images.forEach((image) => {

    image.addEventListener("dragstart", (event) => {

        event.preventDefault();

    });

});