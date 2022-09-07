import { Link } from 'react-router-dom';

/**
 * Presentational Component for displaying each company
 *
 * Props: company: { handle, name, description }
 *
 * RoutesList -> CompanyList -> {SearchForm, CompanyCard}
 */
function CompanyCard({ company }) {
  const { handle, name, description, logoUrl } = company;
  
  return (
    <Link to={`/companies/${handle}`} key={handle}>
      <div className='CompanyCard'>
        <b>{name}</b>
        <p>{description}</p>
        { logoUrl &&
        <img src={logoUrl} alt={`${name}-logo`} />}
      </div>
    </Link>
  );

};

export default CompanyCard;