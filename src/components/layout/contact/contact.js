import './contact.scss'

function contactInit() {
	const form = document.querySelector('[data-contact-form]')
	if (!form) return

	const successEl = form.querySelector('[data-contact-success]')

	form.addEventListener('submit', e => {
		e.preventDefault()

		// Stub: log fields, show success state
		const data = Object.fromEntries(new FormData(form).entries())
		console.log('[contact] form submitted (stub):', data)

		form.querySelectorAll('input, textarea, button[type="submit"]').forEach(el => {
			el.disabled = true
		})

		if (successEl) {
			successEl.hidden = false
		}
	})
}

if (document.querySelector('[data-anim-contact]')) {
	window.addEventListener('load', contactInit)
}
