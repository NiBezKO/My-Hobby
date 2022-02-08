

/* add class header__black */

const header = document.querySelector ("header");

window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY 
    
    if(scrollPos > 753) {
        header.classList.add('black');
    } else {
        header.classList.remove('black');
    }
  
});

/* Burger */

const burger = document.querySelector (".burger");
const dropMenu = document.querySelector (".hobby__nav")

   burger.addEventListener ('click', function() {
     burger.classList.toggle('_active');
     dropMenu.classList.toggle('_active');
});

/* Menu Navigation */

const menuLinks = document.querySelectorAll('.nav__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    
    function  onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockvalue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector(".header").offsetHeight;

            window.scrollTo({
                top: gotoBlockvalue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }

}

/* Slider */

document.addEventListener('DOMContentLoaded', function () {
    new SimpleAdaptiveSlider('.slider', {
      loop: true,
      autoplay: true,
      interval: 5000,
      swipe: true,
    });
});

/* Button show book list */

const btnBook = document.querySelector (".show__book");
const list = document.querySelector (".books__list")

btnBook.addEventListener ('click' , function () {
    btnBook.classList.toggle ('_active');
    list.classList.toggle ('_active');
});

/* Button show arts */

const btnShow = document.querySelector (".button__show");
const art = document.querySelector (".gallery__arts");

btnShow.addEventListener ('click', function() {
    btnShow.classList.toggle('_active');
    art.classList.toggle('_active');
});