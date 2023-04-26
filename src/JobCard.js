/** JobCard for information on a single job
 *
 * Props:
 * - job: [
			{
				"id": 7,
				"title": "Technical brewer",
				"salary": 157000,
				"equity": "0",
				"companyHandle": "watson-davis",
				"companyName": "Watson-Davis"
			},
		}
 *
 * State: N/A
 *
 * JobCardList -> JobCard
 */


function JobCard({ job }) {

	return (
		<div className="JobCard" >
			<h3>{job.title}</h3>
			<p>{job.companyName}</p>
			<br/>
			<p>Salary: {job.salary}</p>
			<p>Equity: {job.equity}</p>
		</div>
	);
}

export default JobCard;