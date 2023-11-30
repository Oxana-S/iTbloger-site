// search.js

console.log("Проверка подключения скрипта - 'search.js'")

// *Получение Элементов:
// Получаю Поле ввода на странице
let searchInput = document.querySelector('.search__input')
// Получаю Модальное окно
let searchModal = document.querySelector('.search__modal')
// Получаю массив  элементов с классом '.search__close' по клику по которым буду закрывать модальное окно 
let closeMod = document.querySelectorAll('.search__close')
// Поле ввода в модальном окне
let searchModalInput = document.querySelector('.search__input--modal')

// *События:
// Открытие модального окна по клику на input, который на странице
searchInput.addEventListener('click', openModal)

// Закрытие модального окна по клику на иконку Крестик или кнопку 'Закрыть поиск'
for (let i = 0; i < closeMod.length; i++) {
    closeMod[i].addEventListener('click', closeModal)
}

// Закрытие модального окна по клику на область вне тега Формы
searchModal.addEventListener('click', buttonPressed)

// *Функции:
// Открыть окно
function openModal() {
    searchModal.classList.remove('hide__modal')
    searchModal.classList.add('show__modal')

    console.log("Открыл окно Поиска")
}
// Закрыть по элементу 
function closeModal() {
    searchModal.classList.remove('show__modal')
    searchModal.classList.add('hide__modal')
}
// Закрыть, определяя на каком элементе модального окна произошел клик
function buttonPressed(event) {
    let t = event.target
    if (t == searchModalInput) {

        return console.log("Это impute");
    }

    if (t == searchModal) {
        console.log("Это window");
        closeModal()
        return console.log("Это модальное окно");
    }
}






console.log(searchModal + '\n ' + searchModalInput)