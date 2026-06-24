import './projects.scss'

function projectsInit() {
	const section = document.querySelector('[data-anim-projects]')
	if (!section) return

	const grid = section.querySelector('[data-projects-grid]')
	const cards = [...section.querySelectorAll('.projects__card')]
	const filters = [...section.querySelectorAll('.projects__filter')]
	const shownEl = section.querySelector('[data-projects-shown]')

	// Count cards per category and populate filter counts
	const categories = { all: cards.length, AI: 0, Web: 0, Security: 0, Cloud: 0 }
	cards.forEach(card => {
		const cats = (card.dataset.projectCategories || '').split(',')
		cats.forEach(c => { if (categories[c] !== undefined) categories[c]++ })
	})
	Object.entries(categories).forEach(([key, count]) => {
		const countEl = section.querySelector(`[data-count-${key.toLowerCase()}]`)
		if (countEl) countEl.textContent = count
	})

	const updateShown = visible => {
		if (shownEl) shownEl.textContent = `${visible} / ${cards.length} SHOWN`
	}
	updateShown(cards.length)

	// Filter logic
	const filterCards = active => {
		let visible = 0
		cards.forEach(card => {
			const cats = (card.dataset.projectCategories || '').split(',')
			const show = active === 'all' || cats.includes(active)
			card.classList.toggle('--hidden', !show)
			if (show) visible++
		})
		updateShown(visible)
	}

	filters.forEach(btn => {
		btn.addEventListener('click', () => {
			filters.forEach(b => {
				b.classList.remove('--active')
				b.setAttribute('aria-selected', 'false')
			})
			btn.classList.add('--active')
			btn.setAttribute('aria-selected', 'true')
			filterCards(btn.dataset.filter)
		})
	})
}

if (document.querySelector('[data-anim-projects]')) {
	window.addEventListener('load', projectsInit)
}
