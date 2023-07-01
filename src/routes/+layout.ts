import type { LayoutLoad } from './$types';
import { parse } from 'yaml';

export const load = (async ({ parent, params, fetch }) => {
	const filename = `tunebook.yaml`;
	const tunebookYaml = await fetch(`/${filename}`)
		.then((response) => response.text())
		.then(parse);
	const folder = tunebookYaml.find((folder) => folder.slug == 'choonz');
	const type = folder.content.find((type) => type.slug == 'choonz');

	return { type };
}) satisfies LayoutLoad;
