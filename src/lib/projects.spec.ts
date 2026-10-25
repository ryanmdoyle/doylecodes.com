import { describe, it, expect } from 'vitest';
import { projects } from './projects';

describe('projects', () => {
	it('have unique slugs', () => {
		const slugs = projects.map((project) => project.slug);
		expect(new Set(slugs).size).toBe(slugs.length);
	});

	it('link only to https URLs', () => {
		for (const project of projects) {
			for (const url of Object.values(project.links)) {
				expect(new URL(url).protocol, `${project.name}: ${url}`).toBe('https:');
			}
		}
	});

	it('describe every screenshot', () => {
		for (const project of projects) {
			for (const screenshot of project.screenshots) {
				expect(screenshot.alt.trim(), project.name).not.toBe('');
			}
		}
	});
});
