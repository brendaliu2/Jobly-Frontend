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
    <div className="JobCard container shadow p-3 mb-3 bg-white rounded">
      <h6>{title}</h6>
      <p>{companyName}</p>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>

      <button
        onClick={() => { apply(id); }}
        disabled={hasApplied}
        className='btn btn-primary'>{hasApplied ? "Applied" : "Apply"}
      </button>

    </div>
  );
}
export default JobCard;