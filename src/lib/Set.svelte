<script lang="ts">
	import Incipit from './Incipit.svelte';

	export let title: string, tunes: Tune[], href: string;

	interface Tune {
		abc: string;
	}
</script>

<div class="set">
	<h3><a {href}>{title}</a></h3>
	{#each tunes as tune}
		<Incipit abc={tune.abc} />
	{/each}
</div>

<style>
	.set {
		border-radius: 1em;
		border: 1px solid var(--secondary);
		max-width: 25em;
		flex-basis: 18em;
		margin: 0.5em;
	}

	a,
	a:visited {
		color: var(--primary);
	}
</style>
