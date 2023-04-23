import {
	HARVEST_ACCESS_TOKEN,
	HARVEST_ACCOUNT_ID,
	HARVEST_URL,
	USER_EMAIL
} from '$env/static/private';
import { error as svelteError } from '@sveltejs/kit';
import type { FetchHarvest, ReturnType } from './types';

/**
 * Fetches data from the Harvest API.
 * svelteFetch can be passed from event
 */
export const fetchHarvest: FetchHarvest<ReturnType> = async ({ endpoint, method, svelteFetch }) => {
	const url = `${HARVEST_URL}${endpoint}`;

	const fetchParams = {
		method: method ?? 'GET',
		headers: {
			Authorization: `Bearer ${HARVEST_ACCESS_TOKEN}`,
			'Harvest-Account-Id': HARVEST_ACCOUNT_ID,
			'User-Agent': `Little Helper App (${USER_EMAIL})`,
			'Content-Type': 'application/json'
		}
	};

	let res;
	let data;
	try {
		if (svelteFetch) res = await svelteFetch(url, fetchParams);
		else res = await fetch(url, fetchParams);

		if (res.ok) data = await res.json();
		else throw svelteError(res.status, res.statusText);
	} catch (error) {
		console.error(error);
		throw svelteError(500, 'Something went wrong, check the console');
	}

	return data;
};
