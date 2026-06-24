// Central content file — edit this to update the portfolio
// Placeholder values are marked with // PLACEHOLDER

export const identity = {
	name: 'Alejandro M. Diaz Limon',
	initials: 'AMDL',
	tagline: 'Security Engineer building secure full-stack & AI systems.',
	role: 'CS Student · Security Engineer',
	location: 'Gainesville, FL',
	email: 'alejmaud@gmail.com',
	phone: '+1 (561) 480 7013',
	github: 'https://github.com/staticvoidmainmaui',
	githubUser: 'staticvoidmainmaui',
	linkedin: 'https://linkedin.com/in/alejandro-m-diaz-limon',
	instagram: '#', // PLACEHOLDER
	resumeUrl: '/files/Alejandro_Mauricio_Diaz_Limon_Resume.pdf',
	heroChips: ['Python', 'TypeScript', 'React', 'AWS', 'Docker', 'Security'],
	// Vara-style corner annotations
	annotations: {
		topLeft: [
			'// portfolio.js',
			'// version: 1.0.0',
			'// status: active',
		],
		bottomRight: [
			'const focus = "security";',
			'const stack = "full-stack";',
			'const mode = "building";',
		],
	},
}

export const about = {
	blurb: [
		"I'm a Computer Science student at the University of Florida specializing in Cybersecurity, passionate about building systems that are secure by design — not as an afterthought.",
		"From BCI research cutting signal latency by 80% to shipping AI gateways with sub-5ms threat detection, I focus on clean architecture, type safety, and measurable outcomes.",
		"I believe the best security is invisible to the user and impenetrable to everyone else.",
	],
	stats: [
		{ value: 5, suffix: '', label: 'ROLES & PROJECTS' },
		{ value: 60, suffix: '%', label: 'API COST REDUCTION' },
		{ value: 30, suffix: '%+', label: 'MODEL ACCURACY GAIN' },
	],
	principles: [
		{
			icon: '> _',
			title: 'SECURITY-FIRST',
			body: 'Threat modeling and zero-trust assumptions baked in from day one, not patched in at the end.',
		},
		{
			icon: '{ }',
			title: 'CLEAN ARCHITECTURE',
			body: 'Modular, self-documenting systems that scale with the team and survive the next engineer.',
		},
		{
			icon: 'T:',
			title: 'TYPE SAFETY',
			body: 'Strict TypeScript, validated inputs at every boundary, predictable state — no surprise runtimes.',
		},
		{
			icon: '→',
			title: 'SHIP FAST',
			body: 'Automated CI/CD, structured workflows, and a bias toward deployed and iterated over perfect and pending.',
		},
	],
}

export const education = [
	{
		degree: 'Bachelor of Science in Computer Science',
		specialization: 'Cybersecurity Specialization',
		minor: 'Business Administration Minor',
		school: 'University of Florida',
		location: 'Gainesville, FL',
		period: '2023 – Expected May 2027',
		coursework: [
			'Data Structures & Algorithms',
			'Information & Database Systems',
			'Computer Organization',
			'Computer & Information Security',
			'Engineering Statistics',
			'Discrete Mathematics',
			'Linear Algebra',
			'Intro to SWE',
		],
	},
]

export const languages = [
	{ name: 'English', level: 3, max: 3, label: 'Native' },  // PLACEHOLDER level
	{ name: 'Spanish', level: 3, max: 3, label: 'Native' },  // PLACEHOLDER level
]

export const experience = [
	{
		title: 'Security Engineering Intern',
		company: 'Hydroficient',
		type: 'Extern',
		location: 'Remote',
		period: 'Jan 2026 – Present',
		bullets: [
			'Building MQTT-based IoT data pipelines in Python + Docker for real-time water monitoring with a live Streamlit security dashboard.',
			'Implemented TLS encryption and device certificate auth; benchmarked encryption overhead on high-frequency sensor data.',
			'Defended against replay attacks using timestamps, counters, and HMAC signatures.',
		],
		tags: ['Python', 'Docker', 'MQTT', 'TLS', 'IoT'],
	},
	{
		title: 'Undergraduate Research Assistant',
		company: 'University of Florida',
		type: 'Dr. Marvin Andujar Lab',
		location: 'Gainesville, FL',
		period: 'Dec 2025 – Present',
		bullets: [
			'BCI research using EMOTIV EEG headsets and RYZE Tello drones for motor imagery-based drone navigation.',
			'Contributing to BlueMuse (open-source LSL tool) with custom ML pipelines for EEG noise filtering.',
			'Architected a raw UDP input pipeline in Unity, cutting BCI signal latency from 10–30ms to 1–5ms.',
		],
		tags: ['Unity', 'Python', 'Machine Learning', 'EEG', 'UDP'],
	},
	{
		title: 'Website Development Intern',
		company: 'Zoe Ministries Inc.',
		type: null,
		location: 'Remote',
		period: 'Feb 2026 – Mar 2026',
		bullets: [
			'Built a PHP extraction tool to parse .wpress binary backup files (4377-byte custom headers) for programmatic access to WordPress assets.',
			'Restructured site CSS for responsive formatting across mobile, tablet, and desktop for zoe-delaware.org.',
			'Implemented version-resilient theme customizations protecting against WordPress core updates.',
		],
		tags: ['PHP', 'WordPress', 'CSS'],
	},
	{
		title: 'WebMaster Lead',
		company: 'Mexican American Student Association',
		type: 'Student Organization',
		location: 'Gainesville, FL',
		period: 'Aug 2025 – Present',
		bullets: [
			"Founded and engineered the org's production site using Astro, TypeScript, and Tailwind CSS on Cloudflare Workers.",
			'Established the web ops team by defining roles and recruiting members.',
			'Built a Python Telegram bot (python-telegram-bot + Google Sheets API) automating a 200+ participant org-wide game.',
		],
		tags: ['Astro', 'TypeScript', 'Tailwind', 'Cloudflare', 'Python'],
	},
	{
		title: 'AI Model Development Lead',
		company: 'UF GatorAI',
		type: 'Project: Market Risk',
		location: 'Gainesville, FL',
		period: 'Aug 2025 – Nov 2025',
		bullets: [
			'Implemented and benchmarked unsupervised models (VAE+GMM, VaDE), improving clustering accuracy of market risk data by 30%+.',
			'Implemented normalizing flows for density estimation to model price distribution for optimized option hedging.',
		],
		tags: ['Python', 'PyTorch', 'Machine Learning', 'VAE', 'Statistics'],
	},
]

export const projects = [
	{
		title: 'GoGators',
		summary: 'Personal AI Planner PWA with multi-turn NLP, DynamoDB session persistence, and a tiered inference pipeline routing through a local classifier before falling back to Claude API — reducing API costs by 60%. Full CI/CD via GitHub Actions.',
		category: ['AI', 'Web', 'Cloud'],
		tech: ['React', 'Node.js', 'Express', 'Docker', 'AWS', 'Claude API', 'DynamoDB'],
		sourceUrl: 'https://github.com/staticvoidmainmaui', // PLACEHOLDER — update with real URL
		demoUrl: '#', // PLACEHOLDER
		wip: false,
	},
	{
		title: 'Baptize',
		summary: 'AI Security Gateway with a 4-stage inspection pipeline (auth, rate limiting, threat scanning, policy) for securing LLM API requests in real time. Prompt injection detection at sub-5ms latency. HMAC-SHA256 key hashing with full audit logging.',
		category: ['AI', 'Security', 'Web'],
		tech: ['React', 'TypeScript', 'Zustand', 'Tailwind CSS', 'HMAC-SHA256'],
		sourceUrl: 'https://github.com/staticvoidmainmaui', // PLACEHOLDER
		demoUrl: '#', // PLACEHOLDER
		wip: false,
	},
	{
		title: 'MASA Website',
		summary: 'Production website for the Mexican American Student Association at UF. Built with Astro, TypeScript, and Tailwind CSS deployed on Cloudflare Workers. Includes a Telegram bot for automating a 200+ participant organization-wide game.', // PLACEHOLDER — expand with real project details
		category: ['Web'],
		tech: ['Astro', 'TypeScript', 'Tailwind CSS', 'Cloudflare Workers', 'Python'],
		sourceUrl: '#', // PLACEHOLDER
		demoUrl: '#', // PLACEHOLDER
		wip: false,
	},
	{
		title: 'BCI Drone Control',
		summary: 'Research project: real-time brain-computer interface control for RYZE Tello drones using EMOTIV EEG headsets. Custom Unity UDP pipeline cutting BCI signal latency from 10–30ms to 1–5ms. Includes ML pipelines for EEG noise filtering.', // PLACEHOLDER
		category: ['AI'],
		tech: ['Unity', 'C#', 'Python', 'UDP', 'Machine Learning', 'EEG'],
		sourceUrl: '#', // PLACEHOLDER
		demoUrl: '#', // PLACEHOLDER
		wip: true,
	},
	{
		title: 'Secure IoT Dashboard',
		summary: 'Real-time security monitor dashboard for MQTT-based IoT water monitoring systems. TLS-encrypted device communication with HMAC replay-attack protection and live pipeline health visualization via Streamlit.', // PLACEHOLDER
		category: ['Security', 'Cloud'],
		tech: ['Python', 'Streamlit', 'Docker', 'MQTT', 'TLS', 'HMAC'],
		sourceUrl: '#', // PLACEHOLDER
		demoUrl: '#', // PLACEHOLDER
		wip: false,
	},
]

export const skills = [
	{
		title: 'Languages',
		icon: '</>',
		accent: 'blue',
		items: ['Python', 'C/C++', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS', 'Bash', 'RISC-V'],
	},
	{
		title: 'Frontend',
		icon: '◻',
		accent: 'white',
		items: ['React', 'Next.js', 'Astro', 'Tailwind CSS', 'Zustand', 'Vite'],
	},
	{
		title: 'Backend',
		icon: '{ }',
		accent: 'blue',
		items: ['Node.js', 'Express.js', 'FastAPI', '.NET', 'Streamlit', 'PHP'],
	},
	{
		title: 'Cloud & DevOps',
		icon: '☁',
		accent: 'white',
		items: ['AWS (ECS, ECR, Lambda, S3, DynamoDB, CloudFront, Cognito, IAM)', 'Docker', 'GitHub Actions', 'Cloudflare', 'Firebase'],
	},
	{
		title: 'Databases',
		icon: '▤',
		accent: 'blue',
		items: ['PostgreSQL', 'MySQL', 'DynamoDB', 'Firestore'],
	},
	{
		title: 'Security',
		icon: '⊕',
		accent: 'white',
		items: ['TLS/SSL', 'MQTT', 'OpenSSL', 'HMAC', 'STRIDE', 'Threat Modeling', 'WSL/Ubuntu', 'Git', 'Unity'],
	},
]
