/*=============== Background Header =============== */
/*function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 30) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);*/

let lastScrollPosition = 0;
let scrolledDown = false;

function scrollHeader() {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.getElementById('header');

    if (currentScrollPosition > lastScrollPosition && !scrolledDown) {
        // Scroll hacia abajo por primera vez
        header.classList.add('scroll-header');
        scrolledDown = true;
    } else if (currentScrollPosition <= 0) {
        // En la parte superior de la página
        header.classList.remove('scroll-header');
        scrolledDown = false;
    }

    lastScrollPosition = currentScrollPosition;
}

window.addEventListener('scroll', scrollHeader);








/*=============== Active Link =============== */

/*=============== Mixitup Filter =============== */

/*=============== Testimonials Swiper =============== */
