<script>
	// @ts-nocheck

	import ProjectCard from '../components/ProjectCard.svelte';
	import EmailButton from '../components/EmailButton.svelte';
	import Socials from '../components/Socials.svelte';
	export let data;
	let portfolios = data.portfolioData;
	const message = `Hello! I'm an educator and web developer from Sacramento, CA, with a decade of experience
		teaching math and science to 6-8th graders. I'm passionate about crafting user-friendly
		applications and staying updated on the latest web technologies. Here are a number of projects I
		have worked on:`;
</script>

<div class="hero-container">
	<h5 class="tagline body">DEVELOPER | EDUCATOR | LEARNER</h5>
	<h1 class="name">Ryan Doyle</h1>
	<p class="message">
		{message}
	</p>
	<div style="margin-top:1rem;">
		<Socials />
	</div>

	<div style="margin-top:1rem;">
		<EmailButton />
	</div>
</div>

<div class="projects">
	<h2>Projects</h2>
	<div class="cards">
		{#each portfolios as project}
			<a href={`/project/${project.id}`}>
				<ProjectCard {project} />
			</a>
		{/each}
	</div>
</div>

<style>
	a {
		text-decoration: none;
	}
	h2,
	p {
		text-align: center;
		line-height: 1.6rem;
	}

	.tagline {
		color: var(--purple);
		font-size: 1rem;
		letter-spacing: 0.3rem;
	}

	.hero-container,
	.projects {
		margin: auto;
		width: 80%;
		align-items: center;
	}

	.hero-container {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.projects {
		margin-top: 2rem;
	}

	.name {
		font-size: 4rem;
	}

	.message {
		letter-spacing: 0.1rem;
	}

	.cards {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 2rem;
	}

	@media (max-width: 900px) {
		p {
			font-size: 0.9rem;
		}

		.tagline {
			font-size: 0.85rem;
		}
		.name {
			font-size: 3rem;
		}
	}

	@media (max-width: 600px) {
		p {
			font-size: 0.7rem;
		}

		h2 {
			font-size: 1.6rem;
		}

		.tagline {
			font-size: 0.7rem;
			text-align: center;
			line-height: 1.2rem;
			letter-spacing: 0.15rem;
		}
		.name {
			font-size: 1.8rem;
			margin: 1rem 0;
		}

		.hero-container {
			height: 90vh;
		}
	}
</style>
