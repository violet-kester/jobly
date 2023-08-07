import JobCard from './JobCard';


/** JobCardList for information on a single job
 *
 * Props:
 * - jobs: [
			{
				"id": 7,
				"title": "Technical brewer",
				"salary": 157000,
				"equity": "0"
			},
		}
 *
 * State: N/A
 *
 * CompanyDetail -> JobCardList -> JobCard
 */

function JobCardList({ jobs }) {

  return (
    <div className='JobCardList'>
      {jobs.map((job) => {
        return <JobCard key={job.id} job={job} />;
      })}
    </div>
  );
}

export default JobCardList;