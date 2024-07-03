<script>
	import classView from '$lib/classView.png';
	export let project;
	const title = project.properties.Name.title[0]?.text?.content;
	const description = project.properties.Description.rich_text[0].text.content;
	const tech = project.properties.Technologies.multi_select;
	const cover = project?.cover?.file?.url;
</script>

<div class="card">
	<img src={cover} alt="hero img" />
	<h3 class="">{title}</h3>
	<p class="">{description}</p>
	<div class="techs body">
		{#each tech as technology}
			<span>{technology.name}</span>
		{/each}
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
