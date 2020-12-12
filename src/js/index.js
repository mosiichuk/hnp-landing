import Accordeon from './accordeon';

const contentLoaded = () => {
    new Accordeon({
        element: 'accordion1',
        oneOpen: true
    });
};

document.addEventListener('DOMContentLoaded', contentLoaded);
