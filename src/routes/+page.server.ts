import { fetchHarvest } from '$lib/harvest';
import { endOfMonth, format, startOfMonth } from 'date-fns';
import { camelizeKeys } from 'humps';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const now = new Date();
	const firstOfMonth = format(startOfMonth(now), 'yyyyMMdd');
	const lastOfMonth = format(endOfMonth(now), 'yyyyMMdd');
	const data = await fetchHarvest({
		endpoint: `/reports/time/projects?from=${firstOfMonth}&to=${lastOfMonth}`
	});
	return camelizeKeys(data);
}) satisfies PageServerLoad;
