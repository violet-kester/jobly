import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";
import JoblyApi from "./api";
import { useState, useEffect } from "react";

/** JobList for information on all jobs
 *
 * Props: N/A
 *
 *
 * State:  {
		- jobs: [
		{
			"id": 1,
			"title": "Conservator, furniture",
			"salary": 110000,
			"equity": "0",
			"companyHandle": "watson-davis",
			"companyName": "Watson-Davis"
		} ... ]
 *
 * JobList -> JobCardList
 */

function JobList() {
	const [jobs, setJobs] = useState({
		data: null,
		isLoading: true
	});

  /** Show all jobs on initial render */
	useEffect(function getJobsFromAPI() {
		async function waitForJobs() {
			const result = await JoblyApi.getJobs();
			setJobs({
				data: result,
				isLoading: false,
			});
		}
		waitForJobs();
	}, []);

  /** Search db for job by title */
	async function handleJobSearch(term) {
		const result = await JoblyApi.getJobsByTitle(term);
		setJobs({
			data: result,
			isLoading: false,
		});
	}

	if (jobs.isLoading) {
		return <i>Loading companies...</i>;
	}

	return (
		<div className='JobList'>
			<SearchForm handleSearch={handleJobSearch} message="Search Jobs!" />
			<JobCardList jobs={jobs.data} />
		</div>
	);
}

export default JobList;