import './JobCard.css'

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
			<h3 className='JobCard-title'>{job.title}</h3>
			{job.companyName && <p>Company: {job.companyName}</p>}
			<br/>
			<p>Salary: {Number(job.salary).toLocaleString()}</p>
			<p>Equity: {job.equity}</p>
		</div>
	);
}

export default JobCard;