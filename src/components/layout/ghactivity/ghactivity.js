import './ghactivity.scss'

const GH_USER = 'staticvoidmainmaui'
const API_URL = `https://github-contributions-api.jogruber.de/v4/${GH_USER}?y=last`
const CACHE_KEY = `gh_activity_${GH_USER}`
const CACHE_TTL = 60 * 60 * 1000 // 1 hour

async function fetchContributions() {
	const cached = localStorage.getItem(CACHE_KEY)
	if (cached) {
		const { data, ts } = JSON.parse(cached)
		if (Date.now() - ts < CACHE_TTL) return data
	}
	const res = await fetch(API_URL)
	if (!res.ok) throw new Error(`GitHub API ${res.status}`)
	const data = await res.json()
	localStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() }))
	return data
}

function levelFromCount(count) {
	if (count === 0) return 0
	if (count <= 2) return 1
	if (count <= 5) return 2
	if (count <= 10) return 3
	return 4
}

function renderHeatmap(contributions, container, totalEl) {
	// contributions.contributions is an array of { date, count } objects
	const days = contributions.contributions || []
	if (!days.length) return

	// Group into weeks
	const weeks = []
	let week = []
	days.forEach((day, i) => {
		week.push(day)
		if (week.length === 7) {
			weeks.push(week)
			week = []
		}
	})
	if (week.length) weeks.push(week)

	const total = days.reduce((sum, d) => sum + d.count, 0)
	if (totalEl) {
		totalEl.innerHTML = `TOTAL CONTRIBUTIONS: <strong>${total.toLocaleString()}</strong>`
	}

	// Build month labels
	const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
	const monthRow = document.createElement('div')
	monthRow.className = 'gh-months'
	let lastMonth = null
	weeks.forEach(week => {
		const firstDay = week[0]
		const month = new Date(firstDay.date).getMonth()
		const label = document.createElement('span')
		label.className = 'gh-month-label'
		if (month !== lastMonth) {
			label.textContent = monthNames[month]
			lastMonth = month
		}
		label.style.width = '14px' // week column width
		monthRow.appendChild(label)
	})

	// Build grid
	const grid = document.createElement('div')
	grid.className = 'gh-grid'
	weeks.forEach(week => {
		const col = document.createElement('div')
		col.className = 'gh-week'
		week.forEach(day => {
			const cell = document.createElement('div')
			cell.className = 'gh-day'
			cell.dataset.level = levelFromCount(day.count)
			cell.title = `${day.date}: ${day.count} contributions`
			col.appendChild(cell)
		})
		grid.appendChild(col)
	})

	// Legend
	const legend = document.createElement('div')
	legend.className = 'gh-legend'
	legend.innerHTML = `<span>Less</span>${[0,1,2,3,4].map(l => `<div class="gh-legend-day gh-day" data-level="${l}"></div>`).join('')}<span>More</span>`

	container.innerHTML = ''
	container.appendChild(monthRow)
	container.appendChild(grid)
	container.appendChild(legend)
}

async function ghactivityInit() {
	const section = document.querySelector('[data-anim-ghactivity]')
	if (!section) return

	const heatmap = section.querySelector('[data-gh-heatmap]')
	const totalEl = section.querySelector('[data-gh-total]')
	const syncEl = section.querySelector('[data-gh-sync]')

	try {
		const data = await fetchContributions()
		renderHeatmap(data, heatmap, totalEl)
		if (syncEl) syncEl.style.opacity = '1'
	} catch {
		if (heatmap) {
			heatmap.innerHTML = '<span class="ghactivity__loading mono-note">// could not load contributions</span>'
		}
		if (syncEl) syncEl.style.opacity = '0.3'
	}
}

if (document.querySelector('[data-anim-ghactivity]')) {
	window.addEventListener('load', ghactivityInit)
}
