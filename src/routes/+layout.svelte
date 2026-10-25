<script lang="ts">
	import '@fontsource-variable/fraunces';
	import '@fontsource-variable/inter';
	import '../app.css';
	import { email } from '#lib/links.ts';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<main>
	{@render children()}
</main>

<footer>
	<p>© {new Date().getFullYear()} Ryan Doyle · Sacramento, CA</p>
	<a href="mailto:{email}">{email}</a>
</footer>

<style>
	main,
	footer {
		width: var(--page);
		margin-inline: auto;
	}

	footer {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 0.5rem 1.5rem;
		margin-top: 6rem;
		padding-block: 2rem 3rem;
		border-top: 1px solid var(--border);
		color: var(--muted);
		font-size: 0.9rem;
	}
</style>
