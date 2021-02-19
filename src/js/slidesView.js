export default function initSlides() {
    const slides = ['intro', 'perks', "how-to-become-affiliate", 'about-program', 'testimonials', 'faq', 'application']
    const chevrons = document.querySelectorAll(".section-scroll-next");

    let currentSlide = window.location.hash ? slides.indexOf(window.location.hash.replace("#", "")) : 0;
    let scrolling = false;
    let keydown = false;

    const scrollToHash = () => {
        if (window.location.hash) {
            window.scrollTo({
                top: document.querySelector(window.location.hash).offsetTop,
                behavior: 'smooth'
            });
        }
    }

    scrollToHash();

    const updateView = (transition) => {
        if (transition === "next" && currentSlide < slides.length - 1) {
            currentSlide++;
        } else if (transition === "prev" && currentSlide > 0) {
            currentSlide--;
        }

        window.location.hash = slides[currentSlide];
        scrollToHash();
    }

    const isFirefox = (/Firefox/i.test(navigator.userAgent));
    const mouseWheelEvent = isFirefox ? "DOMMouseScroll" : "mousewheel";
    const mouseWheelTiming = isFirefox ? 300 : 100;

    const fixFirefox = function () {
        if (isFirefox && window.width < 768) {
            document.getElementsByTagName("html").css('overflow', 'auto');
        }
    }

    fixFirefox();

    window.addEventListener('resize', fixFirefox);

    document.getElementById("main").addEventListener(mouseWheelEvent, function (e) {
        e.preventDefault();

        let timer;

        if (!scrolling) {
            let upcoming;

            if (isFirefox) {
                upcoming = e.detail > 0 ? "next" : "prev";
            } else {
                upcoming = e.wheelDelta < 0 ? "next" : "prev";
            }

            updateView(upcoming);
            scrolling = true;
        }

        window.clearTimeout(timer);

        timer = window.setTimeout(function () {
            scrolling = false;
        }, mouseWheelTiming);
    });

    document.addEventListener("keydown", (e) => {
        if (keydown) return;

        if (e.which === 40) {
            e.preventDefault();
            updateView("next");
        } else if (e.which === 38) {
            e.preventDefault();
            updateView("prev");
        }

        keydown = true;
    });

    document.addEventListener("keyup", () => {
        keydown = false;
    });

    chevrons.forEach(element => {
        element.addEventListener('click', (e) => {
            scrolling = true;
            currentSlide = slides.indexOf(window.location.hash.replace("#", ""))

            setTimeout(function () {
                scrolling = false;
            }, mouseWheelTiming)
        });
    });
}
