import './header.scss'
import { headerScroll } from './plugins/scroll/scroll.js'

function headerInit() {
	// Activate sticky scroll behavior
	headerScroll()

	// Scroll progress bar
	const progressBar = document.getElementById('scroll-progress')
	if (progressBar) {
		const updateProgress = () => {
			const scrollTop = window.scrollY
			const docHeight = document.documentElement.scrollHeight - window.innerHeight
			const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
			progressBar.style.width = pct + '%'
		}
		window.addEventListener('scroll', updateProgress, { passive: true })
		updateProgress()
	}

	// Mobile burger toggle
	const burger = document.querySelector('[data-header-burger]')
	const mobileNav = document.querySelector('[data-header-mobile-nav]')
	if (burger && mobileNav) {
		burger.addEventListener('click', () => {
			const isOpen = mobileNav.classList.toggle('--open')
			burger.classList.toggle('--active', isOpen)
			burger.setAttribute('aria-expanded', isOpen)
		})

		// Close on nav link click
		mobileNav.querySelectorAll('a').forEach(link => {
			link.addEventListener('click', () => {
				mobileNav.classList.remove('--open')
				burger.classList.remove('--active')
				burger.setAttribute('aria-expanded', 'false')
			})
		})
	}
}

if (document.querySelector('[data-anim-header]')) {
	window.addEventListener('load', headerInit)
}
