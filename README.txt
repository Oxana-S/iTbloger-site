Версия gulpfile.js 1.0.2 от 11.04.2023
======================================
1. Добавил простую работу с JS. (task - 'scriptSimple')
2. Добавил обработку js файлов 'babel'-ом
    Если модуль 'babel' подключен, то в браузере не работает 
    подключение модулей js. Эта ошибка связана с тем, что requare
    не определяется в старом js... (см. в консоли ошибку и гугли)
3. Перенес index.html в корень 'src'.
4. Добавил исключения для таска html, чтобы в папку паблик не попадали шаблоны из папки 'chunk'
    src(['./src/**/*.html', '!./src/html/chunk/*.*']) 
    
5. В 'src/html' добавил папку 'page/', чтобы файлы дополнительных страниц хранились там.



Функционал реализованный на сайте:
==================================
1. Выполнено на Bootstrap 5
2. Подключен шрифт "fontawesome".
3. Адаптивная верстка
4. Фиксированная шапка. Скрипт sticky.js
5. Плавный скрол.
6. Загрузка статей по кнопке "Загрузить еще". Скрипт newses.js.
7. Реализован поиск. Скрипт search.js.
8. Модальное окно на поле "Поиск". В скрипте search.js.
9. Анимация логотипа (вращение). Почему не работает?

Сайт на Github: https://oxana-s.github.io/iTbloger-site/public/

Ошибки:
=======
1. Не работает анимация логтипа. Почему?
2. Не отображаются картинки в формате webp. Почему?

