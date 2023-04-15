<script lang="ts">
	import { browser } from '$app/environment';
	import { renderAbc } from 'abcjs';
	import { freeForm } from '../routes/tunebook/[tunebook]/+layout.svelte';
	import type { Writable } from 'svelte/store';

	export let visualTranspose = 0;
	export let tuneOffset: Writable<number>;
	export let abc: string;
	export let fullAbc: string | undefined = undefined;
	export let fontFamily = 'Silkscreen';
	export let staffwidth: number | undefined = undefined;
	export let fontSize = 12;
	export let titleSize = fontSize + 6;
	export let visible = null;
	let dots: HTMLDivElement;
	export let refreshVisibility: number;

	// Normalize repeats to start at the beginning of a line rather than the end of the previous line
	// abcjs displays repeats where written in the abc, so it looks weird if we don't do this
	$: amendedAbc = abc.replace(/\|: *\n/g, '||\n|:').replace(/:: .*\n/g, ':|\n|:');
	$: dots && browser
		? renderAbc(dots, amendedAbc, {
				format: {
					titlefont: `${fontFamily} ${titleSize}`,
					subtitlefont: `${fontFamily} ${fontSize}`,
					composerfont: `${fontFamily} ${fontSize}`,
					partsfont: `${fontFamily} ${fontSize}`,
					tempofont: `${fontFamily} ${fontSize}`,
					infofont: `${fontFamily} ${fontSize}`
				},
				visualTranspose: visualTranspose + $tuneOffset,
				selectTypes: false,
				responsive: 'resize',
				// This makes typescript happy that staffwidth is not undefined
				// If staffwidth is defined, add it as a property, else splat {} to avoid adding staffwidth
				...((staffwidth && { staffwidth }) || {})
		  })
		: undefined;
	$: svg = dots?.getElementsByTagName('svg')?.[0];
	$: svg?.querySelectorAll('g[data-name=ending] text').forEach((elem) => {
		elem.setAttribute('font-family', fontFamily);
	});
	let innerHeight = 0;
	let innerWidth = 0;
	$: visible =
		svg?.getBoundingClientRect().height == 0
			? false
			: (refreshVisibility || true) && innerHeight && innerWidth
			? svg?.getBoundingClientRect().bottom < innerHeight
				? true
				: false
			: null;

	const removeTune = (freeForm: { abc: string }[]) => () =>
		($freeForm = freeForm.filter((tune) => tune.abc != (fullAbc || abc)));
	const addTune = (freeForm: { abc: string }[]) => () =>
		($freeForm = [...freeForm, { abc: fullAbc || abc }]);
</script>

<svelte:window bind:innerHeight bind:innerWidth />

{#if $freeForm}
	{#if $freeForm.find((tune) => tune.abc == (fullAbc || abc))}
		<button on:click={removeTune($freeForm)}>Remove</button>
	{:else}
		<button on:click={addTune($freeForm)}>Add</button>
	{/if}
{/if}
<div bind:this={dots} />

<style>
	div :global(svg) {
		width: 100%;
	}

	div {
		width: max-content;
		margin: 0 auto;
	}
</style>
