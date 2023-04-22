import { HARVEST_ACCESS_TOKEN, HARVEST_ACCOUNT_ID } from '$env/static/private';

export const fetchHarvest = async (url: string) => {
	const res = await fetch(url, {
		headers: {
			Authorization: `Bearer ${HARVEST_ACCESS_TOKEN}`,
			'Harvest-Account-Id': HARVEST_ACCOUNT_ID,
			'User-Agent': 'Harvest API Sample App (theo@lumber.dev)',
			'Content-Type': 'application/json'
		}
	});
	const data = await res.json();
	return data;
};
