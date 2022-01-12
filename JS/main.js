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
    // инициализация слайдера
    var slider = new SimpleAdaptiveSlider('.slider', {
      autoplay: true,
      interval: 5000,
    });
  });

/* Button show arts */

const btnDown = document.querySelector (".show__arts");
const art = document.querySelector (".gallery__arts");

btnDown.addEventListener ('click', function() {
    btnDown.classList.toggle('_active');
    art.classList.toggle('_active');
});