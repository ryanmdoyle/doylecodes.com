<script>
	export let title = 'title';
	export let description = 'description';
</script>

<div class="card">
	<h3 class="">{title}</h3>
	<p class="">{description}</p>
</div>

<style>
	.card {
		max-width: 50vw;
		height: 20vw;
		border: 1px solid var(--gray);
		border-radius: 5px;
		padding: 1rem;
	}
</style>
