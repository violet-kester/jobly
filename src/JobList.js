import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";

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
    - filter: ''
 *
 * JobList -> JobCardList
 */

function JobList() {

   // Make a AJAX request to get all jobs
   const jobs = [1,2,3];
  return (
    <div className='JobList'>
      <SearchForm />
      <JobCardList jobs={jobs}/>
    </div>
  );
}

export default JobList;