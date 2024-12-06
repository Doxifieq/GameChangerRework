const mobile_menu_container = document.getElementById("mobile-menu-container");
const mobile_menu_button = document.getElementById("mobile-menu-button");

mobile_menu_button.addEventListener("click", function() {
    mobile_menu_container.classList.toggle("translate-x-full");
});