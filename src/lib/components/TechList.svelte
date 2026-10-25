<script lang="ts">
	let { tech }: { tech: string[] } = $props();
</script>

<ul aria-label="Built with">
	{#each tech as name (name)}
		<li>{name}</li>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li {
		padding: 0.15rem 0.6rem;
		border-radius: 999px;
		background: var(--accent-soft);
		color: var(--accent-strong);
		font-size: 0.8rem;
		font-weight: 500;
	}
</style>
