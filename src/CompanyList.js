import SearchForm from './SearchForm';
import {useState} from "react";
import CompanyCard from './CompanyCard';


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
  const [companies, setCompanies] = useState([1,2,3]);
  // Function to get all of the companies

  return (
    <div className='CompanyList'>

      {companies.map((company) => {
        return <CompanyCard company={company}/>
      })}
      <SearchForm />
    </div>
  );
}

export default CompanyList;