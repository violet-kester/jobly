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
  const [filter, setFilter] = useState('');

  useEffect(function getCompaniesFromAPI() {
      async function waitForCompanies() {
        const result = await JoblyApi.getCompanies();
        setCompanies(result);
      }
      waitForCompanies();
    }, [filter]);

  async function handleSearch(formData) {
    console.log('I am the formData in handleSearch', formData)
    const result = await JoblyApi.getCompaniesByName(formData);
    console.log('I am the result', result);
    setCompanies(result);
  }

  if (filter.length > 0) {
    console.log('I am the filter in the conditional', filter);
    return <i>Loading companies...</i>
  }

  return (
    <div className='CompanyList'>

      <SearchForm handleSearch={handleSearch} />
      {companies.map((company) => {
        return <CompanyCard key={company.handle} company={company} />;
      })}
    </div>
  );
}

export default CompanyList;