/** JobCard for information on a single job
 *
 * Props:
 * - job: [
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
 * JobCardList -> JobCard
 */


function JobCard({job}) {

  return (
    <div className="JobCard">
      <p>I am a job!</p>
    </div>
  )
}

export default JobCard;