import ScrollReveal from "scrollreveal";

const sr = ScrollReveal();

const slideUp = {
    delay: 375,
    duration: 500,
    distance: '50px',
    reset: true,
};

const slideUpSlower = {
    ...slideUp,
    delay: 600
}

const showWithDelay = {
    delay: 200,
    duration: 900,
    reset: true
};

const slideDown = {
    delay: 600,
    duration: 1000,
    distance: '100px',
    origin: 'top',
    reset: true
};

sr.reveal('.slide-up', slideUp);
sr.reveal('.slide-up--slower', slideUpSlower);
sr.reveal('.show-with-delay', showWithDelay);
sr.reveal('.section-scroll-next-wrapper', slideDown);
