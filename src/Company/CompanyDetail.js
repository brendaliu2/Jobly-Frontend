import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import JoblyApi from '../utils/api';
import Loading from '../Loading';

function CompanyDetail() {

  const params = useParams();

  const [company, setCompany] = useState({
    company: [],
    isLoading: true
  });

  useEffect(function getCompanyOnLoad() {
    async function getCompany() {
      const company = await JoblyApi.getCompany(params.handle);
      console.log('company', company);
      setCompany({
        company: company,
        isLoading: false
      });
    }
    getCompany();
  }, [params.handle]);

  if (company.isLoading) return <Loading />;

  return (
    <div>
      <h1>Company details about {params.handle}!</h1>
      <h1>Company details about {company.company.handle}!</h1>

    </div>

  );
}

export default CompanyDetail;