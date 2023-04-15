import type { LayoutLoad } from './$types';
import { parse } from 'yaml';

export const load = (async ({ params, fetch }) => {
	const filename = `${params['tunebook']}.yaml`;
	const tunebookYaml = await fetch(`/${filename}`)
		.then((response) => response.text())
		.then(parse);
	return { ...params, tunebookYaml };
}) satisfies LayoutLoad;
