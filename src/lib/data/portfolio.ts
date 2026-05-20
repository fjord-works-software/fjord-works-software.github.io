interface PortfolioProject {
	slug: string;
	title: string;
	summary: string;
	tags: string[];
	image: string;
	images?: string[];
	year: number;
	problem: string;
	solution: string;
	outcome: string;
	techStack: string[];
	link?: string;
}

export const portfolio: PortfolioProject[] = [
	{
		slug: 'gsdcstl',
		title: 'German Shepherd Dog Club of St. Louis',
		summary: "Rebuilt the club's outdated website as a modern static site — no more hosting fees.",
		tags: ['Website', 'Dog Club'],
		image: '/images/gsdcstl.png',
		year: 2026,
		problem:
			"The club's existing website was outdated and due for a refresh. They were also paying ongoing hosting fees for infrastructure a static site simply doesn't need.",
		solution:
			'Rebuilt as a clean, modern static site using SvelteKit, deployed to GitHub Pages. The result loads fast, is easy to maintain, and costs nothing to host.',
		outcome:
			'The club now has a polished, fast website with zero ongoing hosting costs — and full ownership of the source code.',
		techStack: ['SvelteKit', 'GitHub Pages'],
		link: 'https://gsdcstl.org'
	},
	{
		slug: 'standlikemen',
		title: 'Stand Like Men',
		summary: 'A low-maintenance podcast website with an integrated CMS and automated episode syncing.',
		tags: ['Website', 'Podcast'],
		image: '/images/standlikemen.png',
		year: 2026,
		problem:
			'The podcast hosts needed a website but had no appetite for ongoing maintenance. They needed to be able to update their own bios and publish blog posts without a developer, and wanted new episodes to appear automatically.',
		solution:
			'Built a statically hosted site with Astro and an integrated CMS so the hosts can manage content without touching code. A scheduled task pulls the latest episodes automatically, keeping the site current with no manual effort.',
		outcome:
			'The hosts have a fast, self-managed website that stays up to date on its own — they can publish posts and update bios anytime, and episodes appear without anyone lifting a finger.',
		techStack: ['Astro', 'CMS', 'Static Hosting'],
		link: 'https://standlikemen.com'
	},
	{
		slug: 'lineup-tracker',
		title: 'Lineup Tracker',
		summary:
			'A mobile-first PWA for managing baseball and softball dugout lineups — shareable via QR code, no app store required.',
		tags: ['PWA', 'Mobile App', 'Sports'],
		image: '/images/LineupTrackerHome.png',
		images: [
			'/images/LineupTrackerHome.png',
			'/images/LineupTrackerConfirm.png',
			'/images/LineupTrackerGame.png'
		],
		year: 2026,
		problem:
			'Little league and church league coaches needed a simple way to manage batting lineups for multiple teams in the dugout. Paper lineups get lost, and handing off to another coach mid-game, especially between innings, meant losing track of who was up next.',
		solution:
			'Built a progressive web app with React that coaches can save to their home screen like a native app, no install required. Coaches can build and manage lineups for multiple teams, track the batting order across innings, and share a lineup instantly with another coach via QR code.',
		outcome:
			'Coaches have a lightweight, always-available tool that lives on their phone and works without an internet connection. Lineup handoffs between coaches take seconds, and nobody loses their place in the order.',
		techStack: ['React', 'PWA', 'Static Hosting'],
		link: 'https://fjordworkssoftware.com/lineup-tracker/'
	}
];
