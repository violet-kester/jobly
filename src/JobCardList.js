import JobCard from './JobCard';


function JobCardList({ jobs }) {

  return (
    <div className='JobCardList'>
      {jobs.map((job) => {
        return <JobCard job={job} />;
      })}
    </div>
  );
}

export default JobCardList;