import { useState, useEffect } from "react";
import JoblyApi from "../api";
import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";
import StyledTypography from "./Typography/Typography";

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
    isLoading: true,
    errors: null
  });

  /** Show all jobs on initial render */
  useEffect(function getJobsFromAPI() {
    async function waitForJobs() {
      const result = await JoblyApi.getJobs();
      setJobs({
        data: result,
        isLoading: false,
        errors: null
      });
    }
    waitForJobs();
  }, []);

  /** Search db for job by title */
  async function handleJobSearch(term) {

    if (term.trim() !== '') {
      const result = await JoblyApi.getJobsByTitle(term);

      // if no results, set error msg
      if (result.length === 0) {
        setJobs({
          data: null,
          isLoading: false,
          errors: 'Sorry, no results were found'
        });
      } else {
        setJobs({
          data: result,
          isLoading: false,
          errors: null
        });
      }

      // if no search term, return all jobs
    } else {
      const result = await JoblyApi.getJobs();
      setJobs({
        data: result,
        isLoading: false,
        errors: null
      });
    }
  }

  if (jobs.isLoading) {
    return <StyledTypography variant='h6'>
      Loading jobs...
    </StyledTypography>;
  }

  return (
    <div className='JobList'>
      <SearchForm handleSearch={handleJobSearch} message="Search Jobs" />
      {jobs.errors !== null
        ? jobs.errors
        : <JobCardList jobs={jobs.data} />
      }
    </div>
  );
}

export default JobList;