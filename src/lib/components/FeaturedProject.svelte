<script lang="ts">
	import type { Project } from '#lib/projects.ts';
	import BrowserFrame from './BrowserFrame.svelte';
	import ProjectLinks from './ProjectLinks.svelte';
	import TechList from './TechList.svelte';

	let { project }: { project: Project } = $props();

	let selected = $state(0);
	let shot = $derived(project.screenshots[selected]);
</script>

<article>
	<div class="media">
		<BrowserFrame>
			{#key shot}
				<enhanced:img
					src={shot.src}
					alt={shot.alt}
					sizes="(min-width: 1080px) 620px, (min-width: 860px) 58vw, 100vw"
					fetchpriority="high"
				/>
			{/key}
		</BrowserFrame>

		{#if project.screenshots.length > 1}
			<div class="thumbs" role="group" aria-label="{project.name} screenshots">
				{#each project.screenshots as screenshot, i (screenshot.src)}
					<button
						type="button"
						aria-pressed={i === selected}
						onclick={() => (selected = i)}
						title={screenshot.caption}
					>
						<enhanced:img src={screenshot.src} alt="" sizes="160px" loading="lazy" />
						<span class="visually-hidden">Show {screenshot.caption ?? `screenshot ${i + 1}`}</span>
					</button>
				{/each}
			</div>
		{/if}
	</div>

	<div class="body">
		<p class="eyebrow">Featured project</p>
		<h3>{project.name}</h3>
		<p class="summary">{project.summary}</p>
		{#if project.about}
			<p>{project.about}</p>
		{/if}
		<ul class="highlights">
			{#each project.highlights as highlight (highlight)}
				<li>{highlight}</li>
			{/each}
		</ul>
		<TechList tech={project.tech} />
		<ProjectLinks {project} />
	</div>
</article>

<style>
	article {
		display: grid;
		gap: 2rem;
		padding: clamp(1.25rem, 3vw, 2rem);
		border: 1px solid var(--border);
		border-radius: calc(var(--radius) + 6px);
		background: color-mix(in srgb, var(--surface) 70%, transparent);
	}

	@media (min-width: 860px) {
		article {
			grid-template-columns: 1.35fr 1fr;
			align-items: start;
		}
	}

	.media {
		display: grid;
		gap: 0.75rem;
		min-width: 0;
	}

	.thumbs {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0.6rem;
	}

	.thumbs button {
		aspect-ratio: 16 / 10;
		padding: 0;
		overflow: hidden;
		border: 2px solid var(--border);
		border-radius: 8px;
		background: var(--surface);
		cursor: pointer;
		opacity: 0.65;
		transition:
			opacity 0.2s ease,
			border-color 0.2s ease;
	}

	.thumbs button:hover,
	.thumbs button[aria-pressed='true'] {
		opacity: 1;
	}

	.thumbs button[aria-pressed='true'] {
		border-color: var(--accent);
	}

	.thumbs :global(img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top left;
	}

	.body {
		display: grid;
		gap: 1rem;
		align-content: start;
	}

	.eyebrow {
		color: var(--accent);
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}

	h3 {
		font-size: clamp(2rem, 4vw, 2.6rem);
	}

	.summary {
		font-size: 1.15rem;
	}

	p:not(.summary, .eyebrow) {
		color: var(--muted);
	}

	.highlights {
		display: grid;
		gap: 0.5rem;
		margin: 0;
		padding: 0;
		list-style: none;
		color: var(--muted);
		font-size: 0.95rem;
	}

	.highlights li {
		position: relative;
		padding-left: 1.25rem;
	}

	.highlights li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.65em;
		width: 0.45rem;
		height: 0.45rem;
		border-radius: 2px;
		background: var(--accent);
		rotate: 45deg;
	}
</style>
