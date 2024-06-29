<script>
	import ProjectCard from '../components/ProjectCard.svelte';
	import EmailButton from '../components/EmailButton.svelte';
	export let data;
	let portfolios = data.portfolioData;
</script>

<div class="hero-container">
	<h5 class="tagline body">DEVELOPER | EDUCATOR | LEARNER</h5>
	<h1 class="">Ryan Doyle</h1>
	<p style="font">
		Hello! I'm an educator and web developer from Sacramento, CA, with a decade of experience
		teaching math and science to 6-8th graders. I'm passionate about crafting user-friendly
		applications and staying updated on the latest web technologies. Here are a number of projects I
		have worked on:
	</p>
	<EmailButton />
</div>

<div class="projects">
	<h2>Projects</h2>
	<div class="cards">
		{#each portfolios as project}
			<ProjectCard
				title={project.properties.Name.title[0]?.text?.content}
				description={project.properties.Description.rich_text[0].text.content}
			/>
		{/each}
	</div>
</div>

<style>
	h2,
	p {
		text-align: center;
	}

	p {
		line-height: 1.6rem;
	}

	.tagline {
		color: var(--purple);
		font-size: 1rem;
	}

	.hero-container,
	.projects {
		margin: auto;
		width: 80%;
		align-items: center;
	}

	.hero-container {
		height: 90vh;
		display: flex;
		flex-direction: column;
	}

	.cards {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 2rem;
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
