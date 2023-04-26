import SearchForm from './SearchForm';
import { useEffect, useState } from "react";
import CompanyCard from './CompanyCard';
import JoblyApi from "./api";


/** CompanyList that shows companies
 *
 * Props: N/A
 *
 * State:
 * - companies 	[{
      "handle": "anderson-arias-morrow",
      "name": "Anderson, Arias and Morrow",
      "description": "Somebody program how I. Face give away discussion view act inside. Your official relationship administration here.",
      "numEmployees": 245,
      "logoUrl": "/logos/logo3.png"
    }...]
 * - filter: ''
 *
 * Func: handleSearch
 *
 * RoutesList -> CompanyList -> CompanyCard
 */

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(function getCompaniesFromAPI() {
    async function waitForCompanies() {
      const result = await JoblyApi.getCompanies();
      setCompanies(result);
    }
    waitForCompanies();
  });

  return (
    <div className='CompanyList'>

      <SearchForm />
      {companies.map((company) => {
        return <CompanyCard company={company} />;
      })}
    </div>
  );
}

export default CompanyList;