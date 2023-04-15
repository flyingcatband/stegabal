<script>
	import { page } from '$app/stores';
	export let data;
</script>

{#if data.folder}
	<ul>
		{#each data.folder.content as type}
			<li><a href="{$page.url}/{type.slug}">{type.name}</a></li>
		{/each}
	</ul>
{/if}
