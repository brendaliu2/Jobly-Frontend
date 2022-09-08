import { useState, useEffect, useContext } from 'react';
import JoblyApi from '../utils/api';
import SearchForm from '../Form/SearchForm';
import CompanyCard from './CompanyCard';
import Loading from '../Loading';
import userContext from '../Context/userContext';
import { Navigate, useNavigate } from 'react-router-dom';

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
  const { user } = useContext(userContext);
  console.log('usercontext', user);

  const [companies, setCompanies] = useState({
    companies: [],
    isLoading: true
  });

  useEffect(function getCompaniesOnLoad() {
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

  // if (!user) return <Navigate to="/login" />;
  if (companies.isLoading) return <Loading />;

  return (
    <div className="CompanyList">
      <SearchForm search={search} />
      <ul>
        {companies.companies.map(company => (
          <li key={company.handle}><CompanyCard company={company} /></li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyList;