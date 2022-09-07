import { Link } from 'react-router-dom';
import './CompanyCard.css';

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
    <div className='container m-2 companyCard'>
      <Link to={`/companies/${handle}`} key={handle}>
        <div className='CompanyCard'>
          <h6>{name}
            {logoUrl &&
              <img className='logo float-end' src={logoUrl} alt={`${name}-logo`} />}
          </h6>
          <p>{description}</p>

        </div>
      </Link>
    </div>
  );

};

export default CompanyCard;