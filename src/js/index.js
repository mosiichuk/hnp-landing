import Accordeon from './accordeon';
import './scrollReveal'

const contentLoaded = () => {
    new Accordeon({
        element: 'accordion1',
        oneOpen: true
    });
};

document.addEventListener('DOMContentLoaded', contentLoaded);
