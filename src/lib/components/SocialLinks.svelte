<script lang="ts">
	import { socials } from '#lib/links.ts';
</script>

<ul>
	{#each socials as social (social.href)}
		<li>
			<a href={social.href} target="_blank" rel="noopener noreferrer">
				<svg viewBox="0 0 24 24" aria-hidden="true"><path d={social.icon} /></svg>
				{social.label}
			</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	a {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 0.9rem;
		border: 1px solid var(--border);
		border-radius: 999px;
		background: var(--surface);
		color: var(--text);
		font-size: 0.9rem;
		text-decoration: none;
		transition:
			border-color 0.2s ease,
			color 0.2s ease;
	}

	a:hover {
		border-color: var(--accent);
		color: var(--accent);
	}

	svg {
		width: 1rem;
		height: 1rem;
		fill: currentColor;
	}
</style>
