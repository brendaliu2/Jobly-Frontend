import { Link } from 'react-router-dom';

/**
 * Presentational Component for displaying each company
 *
 * Props: company: { handle, name, description }
 *
 * RoutesList -> CompanyList -> {SearchForm, CompanyCard}
 */
function CompanyCard({ company }) {
  return (
    <Link to={`/companies/${company.handle}`} key={company.handle}>
      <div className='CompanyCard'>
        <b>{company.name}</b>
        <p>{company.description}</p>
        { company.logoUrl &&
        <img src={company.logoUrl} alt={`${company.name}-logo`} />}
      </div>
    </Link>
  );

};

export default CompanyCard;