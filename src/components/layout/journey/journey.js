import './journey.scss'

function journeyInit() {
	if (!document.querySelector('[data-anim-journey]')) return

	// Staggered scroll-reveal for timeline items
	const items = document.querySelectorAll('.journey__item')
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('--visible')
				observer.unobserve(entry.target)
			}
		})
	}, { threshold: 0.15 })

	items.forEach((item, i) => {
		item.style.opacity = '0'
		item.style.transform = 'translateX(-20px)'
		item.style.transition = `opacity 0.4s ease ${i * 0.08}s, transform 0.4s ease ${i * 0.08}s`
		item.classList.add('--hidden')
		observer.observe(item)
	})

	document.addEventListener('animateJourneyItem', e => {
		const el = e.detail?.target
		if (el) {
			el.style.opacity = '1'
			el.style.transform = 'translateX(0)'
		}
	})

	// Handle --visible class to trigger CSS
	const styleEl = document.createElement('style')
	styleEl.textContent = `.journey__item.--visible { opacity: 1 !important; transform: translateX(0) !important; }`
	document.head.appendChild(styleEl)
}

if (document.querySelector('[data-anim-journey]')) {
	window.addEventListener('load', journeyInit)
}
