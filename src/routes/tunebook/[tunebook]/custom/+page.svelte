<script>
	import { freeForm } from '../+layout.svelte';
	import ViewSet from '$lib/ViewSet.svelte';

	$: set = {
		content: $freeForm
	};
</script>

<h2>Custom set</h2>
{#if set.content}
	<ViewSet {set} />
{/if}
