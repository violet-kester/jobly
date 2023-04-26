import JobCardList from './JobCardList';


function CompanyDetail() {

  // Make a AJAX request to get all jobs from a given company
  const jobs = [1,2,3];
  return (
    <div className='CompanyDetail'>
      <JobCardList jobs={jobs}/>
    </div>
  );
}

export default CompanyDetail;