<script>
	export let href = 'https://www.github.com/doylecodes';
</script>

<div>
	<a {href} target="_blank" rel="noopener noreferrer">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="size-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
			/>
		</svg>
	</a>
</div>

<style>
	div {
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
	}

	a {
		padding: 0.7rem;
		border: 1px solid var(--light-purple);
		border-radius: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgb(210, 201, 224, 0.2);
		transition:
			transform 0.3s ease,
			border 0.3s ease;
	}

	svg {
		height: 32px;
		width: 32px;
		color: var(--purple);
	}

	a:hover {
		height: 32px;
		width: 32px;
		border: 1px solid var(--green);
		transform: scale(1.05);
	}

	a:hover svg {
		color: var(--green);
	}
</style>
