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

	async function handleJobSearch(formData) {
		const result = await JoblyApi.getJobsByTitle(formData);
		setJobs({
			data: result,
			isLoading: false,
		});
	}

	if (jobs.isLoading) {
		return <i>Loading companies...</i>;
	}

	console.log("loaded jobs in JobList", jobs);
	return (
		<div className='JobList'>
			<SearchForm handleSearch={handleJobSearch} message="Search Jobs!" />
			<JobCardList jobs={jobs.data} />
		</div>
	);
}

export default JobList;