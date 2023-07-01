<script>
	import { page } from '$app/stores';
	import BackButton from '$lib/BackButton.svelte';
</script>

<svelte:head><title>Flying Cat Choonbook</title></svelte:head>

<main>
	<h1><a href="/">Choonbook!</a></h1>
	{#if $page.url.pathname.split('/').length > 3}
		<a href="."><BackButton /></a>
	{/if}
	<slot />
</main>
<footer>
	Site made with ❤ by <a href="https://flyingcat.dance/services#websites">Flying Cat</a>
</footer>

<style>
	footer {
		margin-top: auto;
		align-self: center;
		margin-bottom: 1em;
		font-size: small;
		padding: 1em;
		color: #555;
	}

	a :global(svg) {
		position: absolute;
		z-index: 10;
		top: 1.5em;
		right: 1em;
		width: 2em;
		height: auto;
	}

	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
		--primary: #581c87;
		--secondary: #7e22ce;
		--tertiary: #292524;
		accent-color: var(--primary);
		background: #f5f5f4;
	}

	h1 a {
		text-decoration: none;
		color: unset;
	}

	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		max-width: 1000px;
	}
	:global(tspan) {
		color: var(--tertiary);
	}

	h1 {
		color: var(--primary);
		text-transform: uppercase;
		font-size: 3.5rem;
		font-weight: 100;
		line-height: 1.1;
		margin: auto;
		max-width: 14rem;
	}

	@media only screen and (max-width: 35em) {
		h1 {
			font-size: 2rem;
		}
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: Silkscreen;
		color: var(--tertiary);
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}
	}
</style>
