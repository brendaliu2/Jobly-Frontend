import JobCard from './JobCard';
import { useContext } from "react";
import userContext from '../Context/userContext';

/** Creates JobCards with list of jobs
 *
 * Prop: jobs [{job}, ...]
 *
 * RoutesList -> JobList -> JobCardList -> JobCard
 */

function JobCardList({ jobs }) {
  const { user } = useContext(userContext);
  return (
    <ul>
      {jobs.map(job => {
        return <li key={job.id}>
          <JobCard job={job} />
        </li>;
      })}
    </ul>
  );
}

export default JobCardList;