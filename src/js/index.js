import Accordeon from './accordeon';
import './scrollReveal';
import initSlides from './slidesView';

const contentLoaded = () => {
    if (window.matchMedia('(min-width: 992px)').matches) {
        initSlides();
    }

    new Accordeon({
        element: 'accordion1',
        oneOpen: true
    });
};

document.addEventListener('DOMContentLoaded', contentLoaded);
