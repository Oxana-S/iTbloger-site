let news_1 = {
	'photo': 'https://itproger.com/img/news/1517501131.jpg',
	'title': 'Устаревшие языки, которые уже не стоит изучать',
	'intro': 'Есть много ЯП, которые уже отжили свое, но их все равно продолжают изучать. В этой статье мы расскажем про 5 языков, которые уже точно не стоит изучать, хотя многие до сих пор делают это.'
};
let news_2 = {
	'photo': 'https://itproger.com/img/news/1680541146.jpg',
	'title': '10 самых популярных сайтов написанных на Django',
	'intro': 'Django набирает популярность и многие крупные компании используют его для создания веб проектов. Мы подобрали 10 популярных сайтов, написанных на Django.'
};
let news_3 = {
	'photo': 'https://itproger.com/img/news/1679678512.jpg',
	'title': '13 самых популярных сайтов написанных на Django',
	'intro': 'Набирает популярность и многие крупные компании используют его для создания веб проектов. Мы подобрали 10 популярных сайтов, написанных на Django.'
};
let news_4 = {
	'photo': 'https://itproger.com/img/news/1679677650.jpg',
	'title': '14 самых популярных сайтов написанных на Django',
	'intro': 'Популярность и многие крупные компании используют его для создания веб проектов. Мы подобрали 10 популярных сайтов, написанных на Django.'
};
let news_5 = {
	'photo': 'https://itproger.com/img/news/1680541146.jpg',
	'title': '15 самых популярных сайтов написанных на Django',
	'intro': 'Django набирает популярность и многие крупные компании используют его для создания веб проектов. Мы подобрали 10 популярных сайтов, написанных на Django.'
};
let news_6 = {
	'photo': 'https://itproger.com/img/news/1678386582.jpg',
	'title': '16 самых популярных сайтов написанных на Django',
	'intro': 'Ббирает популярность и многие крупные компании используют его для создания веб проектов. Мы подобрали 10 популярных сайтов, написанных на Django.'
};
let news_7 = {
	'photo': 'https://itproger.com/img/news/1677603210.jpg',
	'title': '17 самых популярных сайтов написанных на Django',
	'intro': 'Nodejs набирает популярность и многие крупные компании используют его для создания веб проектов. Мы подобрали 10 популярных сайтов, написанных на Django.'
};
let news_8 = {
	'photo': 'https://itproger.com/img/news/1516366532.jpg',
	'title': '18 самых популярных сайтов написанных на Django',
	'intro': 'Last набирает популярность и многие крупные компании используют его для создания веб проектов. Мы подобрали 10 популярных сайтов, написанных на Django.'
};

let newses = [news_1, news_2, news_3, news_4, news_5, news_6, news_7, news_8];

// -------
// Решение
// =======
let url
let title
let intro

// Сюда выводить новые статьи по клику на кнопку
let newsCards = document.querySelector('.news__cards')

// Регулировка количества выводимых новостей
let countShowNewNewses = newses.length
let z = 0
let countShow

// Слушаю кнопку "Показать еще новости"
let moreNews = document.querySelector('#more-news')
moreNews.addEventListener('click', showMoreNews);

// Вариант-3: вывод 4-х Динамичных Разных Блоков в цикле
// Функция 0.0 на клик по кнопке
function showMoreNews() {
	if (countShowNewNewses == 0) {
		alert("Больше новостей нет")
		moreNews.classList.add('hide')

	}

	if (countShowNewNewses == newses.length) {
		countShow = 4

		for (z; z < countShow; z++) {
			// Беру массив 'newsesValue' с z объектом и при помощи 'Object.values' 
			// получаю массив с его значениями (url, text, text)
			// let newsesValue = Object.values(newses[z])

			// url = newsesValue[0]
			// title = newsesValue[1]
			// intro = newsesValue[2]

			// Можно переписать, не используя преобразование 'Object.value' объекта [z] 
			// в массив с значениями этого объекта
			url = newses[z].photo
			title = newses[z].title
			intro = newses[z].intro

			appendHtmlDynamic(newsCards)
			countShowNewNewses--
		}

		countShow = newses.length - countShowNewNewses

	} 
	else {
		for (z; z < newses.length; z++) {
			// беру массив с первым объектом и получаю массив с его значениями (url, text, text)
			let newsesValue = Object.values(newses[z])

			url = newsesValue[0]
			title = newsesValue[1]
			intro = newsesValue[2]

			appendHtmlDynamic(newsCards)

			countShowNewNewses--
		}

	}

}

// Функция1.1, которая добавит Динамичный HTML-код к элементу
function appendHtmlDynamic(targetElement) {
	let block_dynamic = `
	<div class="card">
		<div class="card__img">
			<img src="${url}" class="card-img-top" alt="..." />
		</div>

		<div class="card-body">
			<h5 class="card-title">${title}</h5>
			<p class="card-text">
				${intro}
			</p>
			<a href="#" class="btn btn-primary">читать дальше</a>
		</div>
	</div>
`
	targetElement.innerHTML += block_dynamic

}






// Тестировал Варианты
// ===================
// Вариант -1
// function showMoreNews() {

	// Вариант-1: вывод Одного Блока
	// Функция appendHtml()
	// appendHtmlStatic(newsCards)
	// }
// }

// Функция-1.0, которая добавит Статичный HTML-код к элементу
// function appendHtmlStatic(element) {
// 	element.innerHTML += block_static
// }



// Вариант -2
// function showMoreNews() {
	// Вариант-2: вывод 4-х Статичных Одинаковых Блоков в цикле
	// for (let i = 0; i < newses.length - 6; i++) {
	// 	appendHtmlStatic(newsCards)
	// }
// }

// Функция-1.0, которая добавит Статичный HTML-код к элементу
// function appendHtmlStatic(element) {

// 	element.innerHTML += block_static

// }