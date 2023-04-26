import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import JobCardList from './JobCardList';
import JoblyApi from './api';
import { NavLink, Link } from "react-router-dom";

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
  const { handle } = useParams();
  const [companyResult, setCompanyResult] = useState({
    data: null,
    isLoading: true
  });

  /** Gets company from API on mount and on handle change */
  useEffect(function getCompanyFromAPIOnMount() {
    async function waitForCompany() {
      const result = await JoblyApi.getCompany(handle);
      setCompanyResult({data: result, isLoading: false});
    }
    waitForCompany();
  }, [handle]);

  if (companyResult.isLoading) return <i>Loading company...</i>

  return (
    <div className='CompanyDetail'>
      <h2>{companyResult.data.name}</h2>
      <p>{companyResult.data.description}</p>
      <JobCardList jobs={companyResult.data.jobs}/>
    </div>
  );
}

export default CompanyDetail;