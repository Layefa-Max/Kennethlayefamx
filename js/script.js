// document.addEventListener("DOMContentLoaded", () => {
//     const slider = document.querySelector(".slider");
//     const slides = document.querySelectorAll(".slider img");
//     let currentIndex = 0;
//     const slideInterval = 3000; // 3 seconds

//     function autoSlide() {
//         currentIndex++;
//         if (currentIndex >= slides.length) {
//             currentIndex = 0;
//         }
//         slider.scrollTo({
//             left: slides[currentIndex].offsetLeft,
//             behavior: "smooth",
//         });
//     }

//     setInterval(autoSlide, slideInterval);
// });


document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slider img");
    let currentIndex = 0;
    const slideInterval = 3000; // 3 seconds
    let autoSlideTimer;

    function autoSlide() {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        slider.scrollTo({
            left: slides[currentIndex].offsetLeft,
            behavior: "smooth",
        });
    }

    function restartAutoSlide() {
        clearInterval(autoSlideTimer);
        autoSlideTimer = setInterval(autoSlide, slideInterval);
    }

    document.querySelectorAll(".slider-nav a").forEach((nav, index) => {
        nav.addEventListener("click", (e) => {
            e.preventDefault();
            currentIndex = index;
            slider.scrollTo({
                left: slides[currentIndex].offsetLeft,
                behavior: "smooth",
            });
            restartAutoSlide();
        });
    });

    autoSlideTimer = setInterval(autoSlide, slideInterval);
});
