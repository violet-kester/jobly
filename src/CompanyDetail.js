import JobCardList from './JobCardList';

/** CompanyDetail for details and jobs from a single company.

 * Props: N/A
 * State: N/A
 *
 * RoutesList -> CompanyDetail
 */

//  "company": {
// 	"handle": "anderson-arias-morrow",
// 	"name": "Anderson, Arias and Morrow",
// 	"description": "Somebody program how I. Face give away discussion view act inside. Your official relationship administration here.",
// 	"numEmployees": 245,
// 	"logoUrl": "/logos/logo3.png",
// 	"jobs": [
// 		{
// 			"id": 7,
// 			"title": "Technical brewer",
// 			"salary": 157000,
// 			"equity": "0"
// 		}...}

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