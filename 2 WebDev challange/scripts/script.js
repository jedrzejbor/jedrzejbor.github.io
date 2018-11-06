// POBIERAM ELEMENTY KTÓRE BĘDĄ POTRZEBNE DO ZROBIENIA MENU
const clickBar = document.querySelector("i");
const menu = document.querySelector("nav");

// TERAZ MECHANIZM POKAZYWANIA MENU
clickBar.addEventListener('click', function () {
    menu.classList.toggle('mobile');
})