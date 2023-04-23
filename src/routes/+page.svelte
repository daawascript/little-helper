<script lang="ts">
	import type { HarvestProject } from '$lib/types';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	const { results } = data as { results: HarvestProject[] };

	const rateByDate = {
		'2022-02-08': 30,
		'2022-06-03': 35,
		'2022-11-30': 40
	};
</script>

<div class="grid">
	<!-- Table with Project Name, Client Name, Total Hours and rate -->
	<table class="table-auto max-w-3xl text-left border-collapse border">
		<thead>
			<tr>
				<th>Project Name</th>
				<th>Client Name</th>
				<th>Total Hours</th>
				<th>Rate</th>
			</tr>
		</thead>
		{#each results as result}
			<tbody>
				<tr class="border">
					<td>{result.projectName}</td>
					<td>{result.clientName}</td>
					<td>{result.totalHours}</td>
					<td>40</td>
				</tr>
			</tbody>
		{/each}
	</table>
</div>
