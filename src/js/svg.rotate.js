// svg.rotate.js
// На что будем нажимать
document.querySelector(".head__logo").onclick = function () {
    myFunction();
};
console.log("Проверка подключения скрипта - 'Вращения Лого-Шестерни'")

// Что будем вращать, добавив класс с анимацией
function myFunction() {
    document.querySelector(".head__logo svg path").classList.toggle("ani");
}


