<script context="module" lang="ts">
	import { writable, type Writable } from 'svelte/store';
	export let tunebook: { slug: string; content: [] }[] = [];
	export const freeForm: Writable<null | { abc: string }[]> = writable(null);
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	export let data;
	$: customPath = `/tunebook/${data.tunebook}/custom`;
	$: isCustom = $page.url.pathname == customPath;
	$: tunebook = data.tunebookYaml;
	$: $freeForm = browser && JSON.parse(window.localStorage.getItem('freeForm') || 'null');
	$: browser && window.localStorage.setItem('freeForm', JSON.stringify($freeForm));

	export let tunebook;
</script>

<!-- <a href="/tunebook/{tunebook}">Back to tunebook</a> -->
{#if $freeForm == null}
	<button on:click={() => ($freeForm = [])}>Create custom set</button>
{:else if isCustom}
	<button
		on:click={() =>
			confirm('Are you sure you want to clear your custom set?') && ($freeForm = null)}
		>Clear custom set</button
	>
{:else}
	<a href={customPath}>Go to custom set</a>
{/if}
<slot />
