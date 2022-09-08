import { Link } from 'react-router-dom';
import './CompanyCard.css';
import { useContext } from "react";
import userContext from '../Context/userContext';

/**
 * Presentational Component for displaying each company
 *
 * Props: company: { handle, name, description }
 * 
 * Context: user 
 *  {username, firstName, lastName, email, isAdmin, applications:[]}
 *
 * RoutesList -> CompanyList -> {SearchForm, CompanyCard}
 */
function CompanyCard({ company }) {
  const { user } = useContext(userContext);
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