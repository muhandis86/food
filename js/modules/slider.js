function slider() {

    // Slider

    const slides = document.querySelectorAll('.offer__slide'),
        current = document.querySelector('#current'),
        total = document.querySelector('#total'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesField = document.querySelector('.offer__slider-inner'),
        width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    // ------------ creating dots for slider ---------------------

    const slider = document.querySelector('.offer__slider'),
        dotsWrapper = document.createElement('div'),
        dots = [];

    slider.style.position = 'relative';
    dotsWrapper.classList.add('carousel-indicators');
    slider.append(dotsWrapper);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-slide', i + 1);      // dot.dataset.slide = i + 1;
        dotsWrapper.append(dot);
        if (i == 0) dot.classList.add('active');
        dots.push(dot);
    }

    function setActiveDot(index) {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index - 1].classList.add('active');
    }

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {

            const activeIndex = e.target.getAttribute('data-slide');    // e.target.dataset.slide;

            slideIndex = activeIndex;

            offset = toDigits(width) * (activeIndex - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;

            setCurrentIndex();
            setActiveDot(slideIndex);
        });
    });


    function toDigits(str) {
        return +str.replace(/\D/g, '');
    }

    //----------------------------------------------------

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    function setCurrentIndex() {
        if (slideIndex < 10) current.textContent = `0${slideIndex}`;
        else current.textContent = slideIndex;
    }

    setCurrentIndex();

    if (slides.length < 10) total.textContent = `0${slides.length}`;
    else total.textContent = slides.length;

    next.addEventListener('click', () => {
        if (++slideIndex > slides.length) slideIndex = 1;
        setCurrentIndex();
        setActiveDot(slideIndex);

        if (offset == toDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += toDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
    });

    prev.addEventListener('click', () => {
        if (--slideIndex <= 0) slideIndex = slides.length;
        setCurrentIndex();
        setActiveDot(slideIndex);

        if (offset == 0) {
            offset = toDigits(width) * (slides.length - 1);
        } else {
            offset -= toDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
    });


    // auto sliding
    // setInterval(() => next.click(), 2000);


    // function showSlide(index) {
    // if (index < 10) current.textContent = `0${index}`;
    // else current.textContent = index;

    //     slides.forEach((item, i) => {
    //         if (i === (index - 1)) {
    //             item.classList.add('show', 'fade');
    //             item.classList.remove('hide');
    //         } else {
    //             item.classList.add('hide');
    //             item.classList.remove('show', 'fade');
    //         }
    //     });
    // }

    // showSlide(slideIndex);

    // if (slides.length < 10) total.textContent = `0${slides.length}`;
    // else total.textContent = slides.length;

    // prev.addEventListener('click', () => {
    //     if (--slideIndex <= 0) slideIndex = slides.length;
    //     showSlide(slideIndex);
    // });

    // next.addEventListener('click', () => {
    //     if (++slideIndex > slides.length) slideIndex = 1;
    //     showSlide(slideIndex);
    // });

}

module.exports = slider;