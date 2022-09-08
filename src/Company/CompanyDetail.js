import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import JoblyApi from '../utils/api';
import Loading from '../Loading';
import JobCardList from '../Job/JobCardList';
import userContext from '../Context/userContext';
import { Navigate } from 'react-router-dom';


/**
 * Company details with list of jobs
 *
 * Props: none
 * State: company { handle, name, description, jobs: [{job}, ...] }
 * 
 * Context: user 
 *  {username, firstName, lastName, email, isAdmin, applications:[]}
 *
 * RoutesList -> CompanyDetails -> JobCardList -> JobCard
 */

function CompanyDetail() {
  const { user } = useContext(userContext);

  const params = useParams();
  const companyHandle = params.handle;



  const [company, setCompany] = useState({
    company: [],
    isLoading: true
  });

  useEffect(function getCompanyOnLoad() {
    async function getCompany() {

      const company = await JoblyApi.getCompany(companyHandle);

      setCompany({
        company: company,
        isLoading: false
      });
    }

    getCompany()

  }, [user, companyHandle]);


  if (company.isLoading) return <Loading />;

  const { name, description, jobs } = company.company;

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <JobCardList jobs={jobs} />
    </div>
  );
}

export default CompanyDetail;