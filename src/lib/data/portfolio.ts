export interface PortfolioProject {
	slug: string;
	title: string;
	client: string;
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
		client: 'German Shepherd Dog Club of St. Louis',
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
	}
];
