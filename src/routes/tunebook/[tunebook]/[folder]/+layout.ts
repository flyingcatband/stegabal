import type { LayoutLoad } from './$types';

export const load = (async ({ parent, params }) => {
	const data = await parent();
	const folder = data.tunebookYaml?.find((folder) => folder.slug == params['folder']);

	return { folder };
}) satisfies LayoutLoad;
