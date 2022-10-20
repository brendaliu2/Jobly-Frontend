import { useState, useEffect } from 'react';
import JoblyApi from '../utils/api';
import SearchForm from '../Form/SearchForm';
import CompanyCard from './CompanyCard';
import Loading from '../Loading';

/**
 * List of Companies
 *
 * Props: None
 * State: companies [{company}, ...]
 *
 * Context: user
 *  {username, firstName, lastName, email, isAdmin, applications:[]}
 *
 * RoutesList -> CompanyList -> {SearchForm, CompanyCard}
 */

function CompanyList() {
  console.log("CompanyListing");

  const [companies, setCompanies] = useState({
    companies: [],
    isLoading: true
  });

  useEffect(function getCompaniesOnLoad() {
    console.log("inside CompanyList useEffect");

    async function getCompanies() {
      const companies = await JoblyApi.getCompanies();

      setCompanies({
        companies: companies,
        isLoading: false
      });
    }

    getCompanies();
  }, []);

  //Accepts formData { name: ... }
  async function search(company) {
    const searchedCompanies = await JoblyApi.getCompanies(company);

    setCompanies({
      companies: searchedCompanies,
      isLoading: false
    });
  }

  if (companies.isLoading) return <Loading />;

  return (
    <div className="CompanyList container m-2 p-2">
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <SearchForm search={search} />
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col'></div>
        <div className='col-md-8'>
          <ul>
            {companies.companies.map(company => (
              <li key={company.handle}><CompanyCard company={company} /></li>
            ))}
          </ul>
        </div>
        <div className='col'></div>
      </div>
    </div>
  );
}

export default CompanyList;