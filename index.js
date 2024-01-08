const burgerNav = document.querySelectorAll(".icon-mobile-nav");
const mobileMenu = document.getElementById('mobile-menu-container');

burgerNav.forEach(function (button) {
    button.addEventListener("click", mobileToggle);
});

function mobileToggle() {
     if (parseFloat(mobileMenu.style.opacity) === 0) {
        mobileMenu.style.opacity = 1;
        mobileMenu.style.translate = "-100%"
    } else if (parseFloat(mobileMenu.style.opacity) === 1) {
        mobileMenu.style.opacity = 0;
        mobileMenu.style.translate = "+100%"
    }
}

