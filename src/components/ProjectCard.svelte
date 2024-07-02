<script>
	import classView from '$lib/classView.png';
	export let title = 'title';
	export let description = 'description';
</script>

<div class="card">
	<img src={classView} alt="hero img" />
	<h3 class="">{title}</h3>
	<p class="">{description}</p>
	<div class="techs body">
		<span>Node</span>
		<span>React</span>
		<span>Javascript</span>
		<span>HTML</span>
		<span>CSS</span>
		<span>Node</span>
		<span>React</span>
		<span>Javascript</span>
		<span>HTML</span>
		<span>CSS</span>
	</div>
</div>

<style>
	h3 {
		font-size: 1.5rem;
		margin: 1rem 0 0 0;
	}

	img {
		width: 300px;
		height: 150px;
		object-fit: cover;
	}
	.card {
		width: 300px;
		background-color: var(--cream);
		border-radius: 10px;
		padding: 1rem;
		filter: drop-shadow(4px 6px 9px #d4d4d4);
		transition:
			transform 0.3s ease,
			drop-shadow 0.3s ease,
			border 0.3s ease;
	}

	.card:hover {
		filter: drop-shadow(4px 6px 9px #9b9b9b);
		transform: scale(1.02);
	}

	.techs {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.techs > span {
		display: inline-block;
		background-color: var(--light-gray);
		border-radius: 5px;
		padding: 0.2rem 0.5rem;
		font-size: 0.8rem;
	}
</style>
