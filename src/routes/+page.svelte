<script>
	import ProjectCard from '../components/ProjectCard.svelte';
	export let data;
	let portfolios = data.portfolioData;
</script>

<div class="hero-container">
	<h5 class="">DEVELOPER | EDUCATOR | LEARNER</h5>
	<h1 class="">Ryan Doyle</h1>
	<p>
		Hello! I'm an educator and web developer from Sacramento, CA, with a decade of experience
		teaching math and science to 6-8th graders. I'm passionate about crafting user-friendly
		applications and staying updated on the latest web technologies. Here are a few tools I enjoy
		working with:
	</p>
</div>

<h2>Projects</h2>
<div class="cards">
	{#each portfolios as project}
		<ProjectCard
			title={project.properties.Name.title[0]?.text?.content}
			description={project.properties.Description.rich_text[0].text.content}
		/>
	{/each}
</div>

<style>
	.hero-container {
		margin: auto;
		width: 80%;
		height: 90vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.cards {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
</style>
