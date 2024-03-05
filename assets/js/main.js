/*=============== show Menu =============== */
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/*=============== show Menu =============== */
/*=============== validate if const exists =============== */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    });
}

/*=============== Hide Show =============== */
/*=============== validate if const exists =============== */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    });
}

/*=============== Remove Menu Mobile =============== */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

/*=============== Background Header =============== */
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
