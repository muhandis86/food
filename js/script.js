require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'whatwg-fetch';
import 'dom-node-polyfills';
import 'formdata-polyfill';


import tabs from './modules/tabs';
import calc from './modules/calc';
import cards from './modules/cards';
import forms from './modules/forms';
import modal from './modules/modal';
import timer from './modules/timer';
import slider from './modules/slider';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    calc();
    forms('form', modalTimerId);
    modal('[data-modal]', '.modal', modalTimerId);
    cards();
    timer('.timer', '2023-07-25');
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        currentCounter: '#current',
        totalCounter: '#total',
        prevArrow: '.offer__slider-prev',
        nextArrow: '.offer__slider-next',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });

});

