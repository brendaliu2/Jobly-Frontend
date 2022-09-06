import { useState, useEffect } from 'react';
import JoblyApi from '../utils/api';
import SearchForm from '../SearchForm';
import CompanyCard from './CompanyCard';
import Loading from '../Loading'

/**
 * List of Companies
 * 
 * Props: None
 * State: companies [{company}, ...]
 * 
 * RoutesList -> CompanyList -> {SearchForm, CompanyCard}
 */
function CompanyList() {

  const [companies, setCompanies] = useState({
    companies: [],
    isLoading: true
  });

  useEffect(function getCompaniesOnLoad() {
    async function getCompanies() {
      const companies = await JoblyApi.getAllCompanies();
      console.log('companiesResp', companies)
      setCompanies({
        companies: companies,
        isLoading: false
      });
    }
    getCompanies();
  }, []);

  //Accepts formData {name: ...}
  async function search(company) {
    const searchedCompanies = await JoblyApi.getAllCompanies(company);
    setCompanies({
      companies: searchedCompanies,
      isLoading: false
    });
  }

  if (companies.isLoading) return <Loading />;

  return (
    <div className="CompanyList">
      {/* <SearchForm search={search} /> */}
      <ul>
        {companies.companies.map(company => <li>{company.handle}</li>)}
      </ul>
    </div>
  );
}

export default CompanyList;