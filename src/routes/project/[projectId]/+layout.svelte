<a href="/">
	<svg
		data-slot="icon"
		fill="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<path
			clip-rule="evenodd"
			fill-rule="evenodd"
			d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
		></path>
	</svg>
</a>

<div class="content">
	<slot></slot>
</div>

<style>
	.content {
		max-width: 800px;
		margin: auto;
	}

	svg {
		position: fixed;
		top: 2rem;
		left: 2rem;
		color: var(--purple);
		height: 32px;
		filter: drop-shadow(4px 6px 9px #d4d4d4);
		transition:
			transform 0.3s ease,
			background-color 0.3s ease;
	}

	svg:hover {
		color: var(--green);
		filter: drop-shadow(4px 6px 9px #9b9b9b);
		transform: scale(1.05);
	}
	@media (max-width: 900px) {
		.content {
			padding: 2rem;
		}
	}
</style>
