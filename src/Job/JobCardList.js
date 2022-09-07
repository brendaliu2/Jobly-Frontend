import JobCard from './JobCard';

/** Creates JobCards with list of jobs
 *
 * Prop: jobs [{job}, ...]
 *
 * RoutesList -> JobList -> JobCardList -> JobCard
 */

function JobCardList({ jobs }) {
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