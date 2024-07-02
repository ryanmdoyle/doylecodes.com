<button
	on:click={() => {
		location.href = 'mailto:ryan@doylecodes.com';
	}}
>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
		<path
			d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"
		/>
		<path
			d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"
		/>
	</svg>

	<span class="display">Email me</span>
</button>

<style>
	button {
		background-color: var(--purple);
		border: 1px solid var(--purple);
		width: 150px;
		height: 60px;
		border-radius: 5px;
		filter: drop-shadow(4px 6px 9px #d4d4d4);
		display: flex;
		justify-content: center;
		align-items: center;
		transition:
			transform 0.3s ease,
			background-color 0.3s ease,
			border 0.3s ease;
	}

	button:hover {
		background-color: var(--green);
		border: 1px solid var(--green);
		transform: scale(1.05);
	}

	svg {
		color: var(--cream);
		height: 30px;
		margin-right: 1rem;
	}

	span {
		color: var(--cream);
		font-size: 1rem;
	}

	button:hover {
		filter: drop-shadow(4px 6px 9px #9b9b9b);
	}
</style>
