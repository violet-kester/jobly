import { useEffect, useState } from 'react';
import JoblyApi from '../api';
import SearchForm from './SearchForm';
import CompanyCard from '../components/CompanyCard';
import StyledTypography from './Typography/Typography';

/** CompanyList component
 *
 * Shows list of company cards.
 *
 * Props: N/A
 *
 * State:
 * - companies {data: {
 *     'handle': 'anderson-arias-morrow',
 *     'name': 'Anderson, Arias and Morrow',
 *     'description': 'Somebody program how I...',
 *     'numEmployees': 245,
 *     'logoUrl': '/logos/logo3.png'
 *   }..., isLoading: false]
 *
 * Func: handleSearch
 *
 * RoutesList -> CompanyList -> CompanyCard
 */

function CompanyList() {
  const [companies, setCompanies] = useState({
    data: null,
    isLoading: true,
    errors: null
  });

  /** Shows all companies on initial render */
  useEffect(function getCompaniesFromAPIOnMount() {
    async function waitForCompanies() {
      const result = await JoblyApi.getCompanies();
      setCompanies({
        data: result,
        isLoading: false,
        errors: null,
      });
    }
    waitForCompanies();
  }, []);

  /** Search db for company by handle */
  async function handleCompanySearch(term) {

    // if search term provided, get by name
    if (term.trim() !== '') {
      const result = await JoblyApi.getCompaniesByName(term);

      // if no results, set error msg
      if (result.length === 0) {
        setCompanies({
          data: 'bad data',
          isLoading: false,
          errors: 'Sorry, no results were found.'
        });
      } else {
        // if results, update state
        setCompanies({
          data: result,
          isLoading: false,
          errors: null
        });
      }

    // if no search term, return all companies
    } else {
      const result = await JoblyApi.getCompanies();
      setCompanies({
        data: result,
        isLoading: false,
        errors: null
      });
    }
  }

  if (companies.isLoading) {
    return <StyledTypography variant='h6'>
      Loading companies...
    </StyledTypography>;
  }

  return (
    <div className='CompanyList'>

      <SearchForm handleSearch={handleCompanySearch} message='Search companies' />

      {companies.errors !== null
        ? companies.errors
        : companies.data.map((company) => {
          return <CompanyCard key={company.handle} company={company} />;
        })
      }
    </div>
  );
}

export default CompanyList;