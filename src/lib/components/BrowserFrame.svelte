<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="frame">
	<div class="bar" aria-hidden="true"><span></span><span></span><span></span></div>
	<div class="viewport">
		{@render children()}
	</div>
</div>

<style>
	.frame {
		overflow: hidden;
		border: 1px solid var(--border);
		border-radius: var(--radius);
		background: var(--surface);
		box-shadow: var(--shadow);
	}

	.bar {
		display: flex;
		gap: 0.35rem;
		padding: 0.6rem 0.8rem;
		border-bottom: 1px solid var(--border);
	}

	.bar span {
		width: 0.55rem;
		height: 0.55rem;
		border-radius: 50%;
		background: var(--border);
	}

	.viewport {
		aspect-ratio: 16 / 10;
		overflow: hidden;
	}

	.viewport :global(img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top center;
	}
</style>
