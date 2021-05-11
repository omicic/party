$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 0,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

const hamburgerNavMenu = document.querySelector(".hamburger");
const hamburgerProductsMenu = document.querySelector(".productshamburger");
const navMenu = document.querySelector(".nav-menu");
const productsmenu = document.querySelector(".productsNavMenu");

hamburgerNavMenu.addEventListener("click", mobileMenu);
hamburgerProductsMenu.addEventListener("click", mobileProductMenu)

function mobileMenu() {
    hamburgerNavMenu.classList.toggle("active");
        navMenu.classList.toggle("active");
}

function mobileProductMenu() {
    hamburgerProductsMenu.classList.toggle("active");
    productsmenu.classList.toggle("active");
}