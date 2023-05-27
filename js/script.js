document.addEventListener('DOMContentLoaded', () => {

	const langSwitcher = document.querySelectorAll('.js-btn[data-purpose="langSwitcher"]');

	langSwitcher.forEach(btn => {

		const langs = {
			ru: 'ru',
			en: 'en'
		}
		const views = {
			ru: document.querySelector('#ruV'),
			en: document.querySelector('#enV')
		}

		function setlang(l) {
			document.documentElement.setAttribute('lang', l)
			docLang = l;
		}

		function switchView() {
			const docLang = document.documentElement.getAttribute('lang');
			if (docLang === langs.en) {
				setlang(langs.ru)
				views.en.style.display = 'none';
				views.ru.style.display = 'block';
			} else if (docLang === langs.ru) {
				setlang(langs.en)
				views.ru.style.display = 'none';
				views.en.style.display = 'block';
			}
		}

		btn.addEventListener('click', (e) => {
			e.preventDefault();
			switchView();
		})
	})
})
