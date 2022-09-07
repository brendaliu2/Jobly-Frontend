/**
 * Presentational Component for Job
 *
 * Prop: job {id, ...}
 *
 * JobCardList -> Job Card
 */
function JobCard({ job }) {
  const { title, salary, equity } = job;

  return (
    <div className="JobCard">
      <b>{title}</b>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
    </div>
  );
}
export default JobCard;