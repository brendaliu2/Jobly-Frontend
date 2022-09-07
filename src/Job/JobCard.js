/**
 * Presentational Component for Job
 * 
 * Prop: job {id, ...}
 * 
 * JobCardList -> Job Card
 */
function JobCard({ job }) {
  return (
    <div className="JobCard">
      <b>{job.title}</b>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
    </div>

  );
}
export default JobCard;