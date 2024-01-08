const burgerNav = document.querySelectorAll(".icon-mobile-nav");
const mobileMenu = document.getElementById('mobile-menu-container');
const closeButton = document.querySelector('.icon-mobile-nav[name="close"]')
const openButton = document.querySelector('.icon-mobile-nav[name="menu"]')

burgerNav.forEach(function (button) {
    button.addEventListener("click", mobileToggle);
});

function mobileToggle() {
     if (parseFloat(mobileMenu.style.opacity) === 0) {
        mobileMenu.style.opacity = 1;
        mobileMenu.style.translate = "-100%";
        openButton.style.display = "none";
        closeButton.style.display = "flex"
    } else if (parseFloat(mobileMenu.style.opacity) === 1) {
        mobileMenu.style.opacity = 0;
        mobileMenu.style.translate = "+100%"
        openButton.style.display = "flex";
        closeButton.style.display = "none"

    }
}

