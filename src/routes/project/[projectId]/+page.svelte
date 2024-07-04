<script>
	// @ts-nocheck
	import GithubLink from '$components/GithubLink.svelte';
	import SiteLink from '$components/SiteLink.svelte';
	export let data;
	const { page, blocks } = data;
	const contentBlocks = blocks;
	const title = page.properties.Name.title[0].plain_text;
	const technologies = page.properties.Technologies.multi_select;
	const githubLink = page.properties.Github.url;
	const liveLink = page.properties.Link.url;
</script>

<h2>{title}</h2>

{#if technologies}
	<ul>
		{#each technologies as tech}
			<li class="body">{tech.name}</li>
		{/each}
	</ul>
{/if}

<div class="centered">
	{#if githubLink}
		<GithubLink href={githubLink} />
	{/if}

	{#if liveLink}
		<SiteLink href={liveLink} />
	{/if}
</div>

{#each blocks as block}
	{#if block.type.toString() === 'heading_3'}
		<h3>{block.heading_3.rich_text[0].plain_text}</h3>
	{/if}

	{#if block.type.toString() === 'paragraph'}
		<p>{block.paragraph.rich_text[0].plain_text}</p>
	{/if}

	{#if block.type.toString() === 'image'}
		<div class="image-container">
			<img src={block.image.file.url} alt="web portfolio" />
		</div>
	{/if}
{/each}

<style>
	h2 {
		text-align: center;
	}

	ul {
		list-style: none;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
	}

	li {
		display: inline-block;
		background-color: var(--light-gray);
		border-radius: 5px;
		padding: 0.2rem 0.5rem;
		font-size: 0.8rem;
	}

	img {
		max-width: 600px;
		object-fit: contain;
	}

	.centered {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	.image-container {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	@media (max-width: 900px) {
		h3 {
			text-align: center;
		}

		img {
			max-width: 80%;
			object-fit: contain;
		}
	}
</style>
