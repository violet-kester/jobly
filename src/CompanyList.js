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
 *
 * Func: handleSearch
 *
 * RoutesList -> CompanyList -> CompanyCard
 */

function CompanyList() {
  const [companies, setCompanies] = useState({
    data: null,
    isLoading: true
  });

  useEffect(function getCompaniesFromAPI() {
    async function waitForCompanies() {
      const result = await JoblyApi.getCompanies();
      setCompanies({
        data: result,
        isLoading: false,
      });
    }
    waitForCompanies();
  }, []);

  async function handleCompanySearch(formData) {
    const result = await JoblyApi.getCompaniesByName(formData);
    setCompanies({
      data: result,
      isLoading: false,
    });
  }

  if (companies.isLoading) {
    return <i>Loading companies...</i>;
  }

  return (
    <div className='CompanyList'>

      <SearchForm handleSearch={handleCompanySearch} message="Search Companies!" />
      {companies.data.map((company) => {
        return <CompanyCard key={company.handle} company={company} />;
      })}
    </div>
  );
}

export default CompanyList;