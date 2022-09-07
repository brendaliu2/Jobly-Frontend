import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import JoblyApi from '../utils/api';
import Loading from '../Loading';
import JobCardList from '../Job/JobCardList';

/**
 * Company details with list of jobs
 *
 * Props: none
 * State: company { handle, name, description, jobs: [{job}, ...] }
 *
 * RoutesList -> CompanyDetails -> JobCardList -> JobCard
 */

function CompanyDetail() {

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
    getCompany();
  }, [companyHandle]);

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