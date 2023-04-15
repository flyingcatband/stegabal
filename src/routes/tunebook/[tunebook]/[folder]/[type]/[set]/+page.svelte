<script>
	import { page } from '$app/stores';
	import ViewSet from '$lib/ViewSet.svelte';
	export let data;

	$: index = data.type.content.findIndex((t) => t.slug == $page.params['set']);
	$: set = data.type.content[index];
	$: previousSet = data.type.content[index - 1];
	$: nextSet = data.type.content[index + 1];
</script>

<h2>
	<a href="..">{data.folder.name}</a> &mdash; <a href=".">{data.type.name}</a> &mdash; {set.name}
</h2>
{#if previousSet}
	<a href={previousSet.slug}>Previous set</a>
{/if}
{#if nextSet}
	<a href={nextSet.slug}>Next set</a>
{/if}
<ViewSet {set} />

<style>
	h2 {
		max-width: 70%;
		margin: auto;
	}
</style>
