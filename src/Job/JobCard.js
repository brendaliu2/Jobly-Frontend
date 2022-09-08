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
  const { user } = useContext(userContext);
  const { title, salary, equity, companyName } = job;


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
    </div>
  );
}
export default JobCard;