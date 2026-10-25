<script lang="ts">
	import type { Project } from '#lib/projects.ts';
	import BrowserFrame from './BrowserFrame.svelte';
	import ProjectLinks from './ProjectLinks.svelte';
	import TechList from './TechList.svelte';

	let { project }: { project: Project } = $props();

	let cover = $derived(project.screenshots[0]);
</script>

<article>
	<BrowserFrame>
		<enhanced:img
			src={cover.src}
			alt={cover.alt}
			sizes="(min-width: 1080px) 520px, (min-width: 720px) 48vw, 100vw"
			loading="lazy"
		/>
	</BrowserFrame>

	<div class="body">
		<h3>{project.name}</h3>
		<p>{project.summary}</p>
		<TechList tech={project.tech} />

		<details>
			<summary>What I built</summary>
			<ul>
				{#each project.highlights as highlight (highlight)}
					<li>{highlight}</li>
				{/each}
			</ul>
		</details>

		<ProjectLinks {project} />
	</div>
</article>

<style>
	article {
		display: grid;
		gap: 1.25rem;
		align-content: start;
	}

	.body {
		display: grid;
		gap: 0.75rem;
	}

	h3 {
		font-size: 1.6rem;
	}

	p {
		color: var(--muted);
	}

	details {
		font-size: 0.95rem;
	}

	summary {
		width: fit-content;
		color: var(--text);
		font-weight: 550;
		cursor: pointer;
	}

	summary::marker {
		color: var(--accent);
	}

	ul {
		display: grid;
		gap: 0.35rem;
		margin: 0.6rem 0 0;
		padding-left: 1.2rem;
		color: var(--muted);
	}
</style>
