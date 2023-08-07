import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import JobCardList from './JobCardList';
import JoblyApi from '../api';


/** CompanyDetail for details and jobs from a single company.

 * Props: N/A
 * State: N/A
 *
 * RoutesList -> CompanyDetail
 */

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