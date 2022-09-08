import './JobCard.css';
import { useContext } from "react";
import userContext from '../Context/userContext';
/**
 * Presentational Component for Job
 *
 * Prop: job {id, ...}
 *
 * JobCardList -> Job Card
 */
function JobCard({ job }) {
  const { user, apply } = useContext(userContext);
  const { id, title, salary, equity, companyName } = job;

  const hasApplied = user.applications.includes(id);

  return (
    <div className="JobCard container">
      <h6>{title}</h6>
      <p>{companyName}</p>
      <small>
        <p>Salary: {salary}</p>
      </small>
      <small>
        <p>Equity: {equity}</p>
      </small>
      {!hasApplied ?
        <button onClick={() => apply(id)} className='btn btn-primary'>Apply</button>
        :
        <button disabled className='btn btn-primary'>Applied</button>
      }
    </div>
  );
}
export default JobCard;