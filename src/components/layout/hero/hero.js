import './hero.scss'
import SplitType from 'split-type'

function heroInit() {
	const section = document.querySelector('[data-anim-hero]')
	if (!section) return

	// Split-type reveal on hero name
	const nameEl = section.querySelector('[data-hero-name]')
	if (nameEl) {
		const split = new SplitType(nameEl, { types: 'chars' })
		split.chars.forEach((char, i) => {
			char.style.opacity = '0'
			char.style.transform = 'translateY(60px)'
			char.style.transition = `opacity 0.5s ease ${i * 0.03}s, transform 0.5s ease ${i * 0.03}s`
		})
		// Trigger after a short delay (post-preloader)
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				split.chars.forEach(char => {
					char.style.opacity = '1'
					char.style.transform = 'translateY(0)'
				})
			})
		})
	}

	// Fade in hero content blocks sequentially
	const fadeItems = section.querySelectorAll(
		'.hero__role, .hero__chips, .hero__socials, .hero__actions, .hero__annotation'
	)
	fadeItems.forEach((el, i) => {
		el.style.opacity = '0'
		el.style.transform = 'translateY(20px)'
		el.style.transition = `opacity 0.5s ease ${0.4 + i * 0.1}s, transform 0.5s ease ${0.4 + i * 0.1}s`
		requestAnimationFrame(() => requestAnimationFrame(() => {
			el.style.opacity = '1'
			el.style.transform = 'translateY(0)'
		}))
	})

	// Resume popup (lightweight — no dependency on popup component)
	const popupEl = document.getElementById('resume-popup')
	if (popupEl) {
		const openBtn = section.querySelector('[data-anim-popup="resume-popup"]')
		const closeBtn = popupEl.querySelector('[data-anim-popup-close]')

		const openPopup = () => {
			popupEl.classList.add('--active')
			document.documentElement.setAttribute('data-anim-scrolllock', '')
			document.body.style.paddingRight = (window.innerWidth - document.body.offsetWidth) + 'px'
		}
		const closePopup = () => {
			popupEl.classList.remove('--active')
			document.documentElement.removeAttribute('data-anim-scrolllock')
			document.body.style.paddingRight = ''
		}

		openBtn?.addEventListener('click', openPopup)
		closeBtn?.addEventListener('click', closePopup)
		popupEl.addEventListener('click', e => { if (e.target === popupEl) closePopup() })
		document.addEventListener('keydown', e => { if (e.key === 'Escape') closePopup() })
	}
}

if (document.querySelector('[data-anim-hero]')) {
	window.addEventListener('load', heroInit)
}
