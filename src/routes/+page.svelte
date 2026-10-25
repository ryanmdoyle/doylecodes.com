<script lang="ts">
	import FeaturedProject from '#lib/components/FeaturedProject.svelte';
	import ProjectCard from '#lib/components/ProjectCard.svelte';
	import SocialLinks from '#lib/components/SocialLinks.svelte';
	import { email } from '#lib/links.ts';
	import { projects } from '#lib/projects.ts';

	const featured = projects.filter((project) => project.featured);
	const others = projects.filter((project) => !project.featured);
</script>

<svelte:head>
	<title>Ryan Doyle · Developer & Educator</title>
	<meta
		name="description"
		content="Ryan Doyle is an educator and web developer in Sacramento, CA, building tools for classrooms."
	/>
</svelte:head>

<header class="hero">
	<p class="eyebrow">Developer · Educator · Learner</p>
	<h1>Ryan Doyle</h1>
	<p class="intro">
		I'm an educator and web developer from Sacramento, CA, with a decade of experience teaching
		middle school. I build apps for the classroom, with a focus on tools that are simple for
		teachers and students to use.
	</p>
	<div class="actions">
		<a class="button" href="mailto:{email}">
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<path
					d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"
				/>
				<path
					d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"
				/>
			</svg>
			Email me
		</a>
		<SocialLinks />
	</div>
</header>

<section aria-labelledby="projects-heading">
	<h2 id="projects-heading">Projects</h2>

	{#each featured as project (project.slug)}
		<FeaturedProject {project} />
	{/each}

	<div class="grid">
		{#each others as project (project.slug)}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

<style>
	.hero {
		display: grid;
		gap: 1.25rem;
		padding-block: clamp(4rem, 14vh, 9rem) clamp(3rem, 8vh, 5rem);
	}

	.eyebrow {
		color: var(--accent);
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: 0.2em;
		text-transform: uppercase;
	}

	h1 {
		font-size: clamp(3.25rem, 10vw, 6.5rem);
		font-weight: 450;
		line-height: 0.95;
		letter-spacing: -0.03em;
	}

	.intro {
		max-width: 58ch;
		color: var(--muted);
		font-size: clamp(1.1rem, 2vw, 1.25rem);
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1rem;
		margin-top: 0.5rem;
	}

	.button {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		padding: 0.7rem 1.3rem;
		border-radius: 999px;
		background: var(--accent);
		color: var(--on-accent);
		font-weight: 600;
		text-decoration: none;
		transition: background-color 0.2s ease;
	}

	.button:hover {
		background: var(--accent-strong);
	}

	.button svg {
		width: 1.1rem;
		height: 1.1rem;
		fill: currentColor;
	}

	section {
		display: grid;
		gap: 2.5rem;
	}

	h2 {
		font-size: clamp(2rem, 5vw, 2.75rem);
	}

	.grid {
		display: grid;
		gap: 3.5rem 2.5rem;
		margin-top: 1.5rem;
	}

	@media (min-width: 720px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
