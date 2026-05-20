interface PortfolioProject {
	slug: string;
	title: string;
	summary: string;
	tags: string[];
	image: string;
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
	}
];
