import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import JobCardList from './JobCardList';
import JoblyApi from './api';

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
  const companyHandle = useParams();
  const [company, setCompany] = useState({
    data: null,
    isLoading: true
  });

  console.log("CompanyDetail", company.data);
  console.log("CompanyDetail handle", companyHandle);



  useEffect(function getCompanyFromAPI() {
    async function waitForCompany() {
      const result = await JoblyApi.getCompany(companyHandle.name);
      setCompany({data: result, isLoading: false});
    }
    waitForCompany();
  }, []);

  if (company.isLoading) return <i>Loading company...</i>

  return (
    <div className='CompanyDetail'>
      <h2>{company.data.name}</h2>
      <p>{company.data.description}</p>
      <JobCardList jobs={company.data.jobs}/>
    </div>
  );
}

export default CompanyDetail;