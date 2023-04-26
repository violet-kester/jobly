import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";

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