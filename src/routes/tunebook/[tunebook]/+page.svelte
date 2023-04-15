<script>
	import { page } from '$app/stores';
	export let data;
</script>

<ul>
	{#each data.tunebookYaml || [] as section}
		<li><a href="{$page.url}/{section.slug}">{section.name}</a></li>
	{/each}
</ul>
