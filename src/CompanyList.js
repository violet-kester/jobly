import SearchForm from './SearchForm';
import {useState} from "react";
import CompanyCard from './CompanyCard';


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