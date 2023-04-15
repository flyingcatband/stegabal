import type { LayoutLoad } from './$types';

export const load = (async ({ parent, params }) => {
	const data = await parent();
	const type = data.folder.content.find((type) => type.slug == params['type']);

	return { type };
}) satisfies LayoutLoad;
