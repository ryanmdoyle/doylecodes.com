<script lang="ts">
	import type { Project } from '#lib/projects.ts';

	let { project }: { project: Project } = $props();
</script>

{#if project.links.live || project.links.code}
	<div class="links">
		{#if project.links.live}
			<a href={project.links.live} target="_blank" rel="noopener noreferrer">
				Visit site <span aria-hidden="true">↗</span>
				<span class="visually-hidden">for {project.name}</span>
			</a>
		{/if}
		{#if project.links.code}
			<a href={project.links.code} target="_blank" rel="noopener noreferrer">
				{project.codeLabel ?? 'Source'} <span aria-hidden="true">↗</span>
				<span class="visually-hidden">code for {project.name}</span>
			</a>
		{/if}
	</div>
{/if}

<style>
	.links {
		display: flex;
		flex-wrap: wrap;
		gap: 1.25rem;
		font-size: 0.95rem;
		font-weight: 550;
	}

	a {
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
