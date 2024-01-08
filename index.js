const burgerNav = document.querySelectorAll(".icon-mobile-nav");
const mobileMenu = document.getElementById('mobile-menu-container');

burgerNav.forEach(function (button) {
button.addEventListener("click", mobileToggle)
})

function mobileToggle() {
if (mobileMenu.style.display === "") {
        mobileMenu.style.display = "flex";
} else if (mobileMenu.style.display === "flex") {
        mobileMenu.style.display = "";
}
}
