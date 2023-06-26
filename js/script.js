
window.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs'),
        calc = require('./modules/calc'),
        cards = require('./modules/cards'),
        forms = require('./modules/forms'),
        modal = require('./modules/modal'),
        timer = require('./modules/timer'),
        slider = require('./modules/slider');

    tabs();
    calc();
    forms();
    modal();
    cards();
    timer();
    slider();

});

