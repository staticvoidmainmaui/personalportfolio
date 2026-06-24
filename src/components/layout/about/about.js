import './about.scss'

function aboutInit() {
	if (!document.querySelector('[data-anim-about]')) return

	// Animate stat counters when they scroll into view
	const counters = document.querySelectorAll('[data-anim-digcounter]')
	if (!counters.length) return

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (!entry.isIntersecting) return
			const el = entry.target.querySelector('[data-anim-digcounter-value]')
			if (!el || el.dataset.animated) return
			el.dataset.animated = 'true'

			const target = parseInt(el.dataset.animDigcounterValue, 10)
			const suffix = el.dataset.animDigcounterAfter || ''
			const duration = 1200
			const start = performance.now()

			const tick = now => {
				const elapsed = now - start
				const progress = Math.min(elapsed / duration, 1)
				const eased = 1 - Math.pow(1 - progress, 3)
				el.textContent = Math.round(eased * target) + suffix
				if (progress < 1) requestAnimationFrame(tick)
			}
			requestAnimationFrame(tick)
			observer.unobserve(entry.target)
		})
	}, { threshold: 0.4 })

	counters.forEach(c => observer.observe(c))
}

if (document.querySelector('[data-anim-about]')) {
	window.addEventListener('load', aboutInit)
}
