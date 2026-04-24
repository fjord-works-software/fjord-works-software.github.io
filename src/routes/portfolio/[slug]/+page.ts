import { portfolio } from '$lib/data/portfolio';
import { error } from '@sveltejs/kit';

export function entries() {
	return portfolio.map((p) => ({ slug: p.slug }));
}

export function load({ params }) {
	const project = portfolio.find((p) => p.slug === params.slug);
	if (!project) error(404, 'Project not found');
	return { project };
}
