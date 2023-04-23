export type HarvestProject = {
	projectId: number;
	projectName: string;
	clientId: number;
	clientName: string;
	totalHours: number;
	billableHours: number;
	currency: string | null;
	billableAmount: string | null;
};

export type FetchParams = {
	endpoint: string;
	method?: 'GET' | 'POST';
	svelteFetch?: typeof fetch;
};

export type FetchHarvest<T> = (params: FetchParams) => Promise<T>;

export type ReturnType = {
	[key: string]: string | number | boolean | ReturnType[];
};
