import { useState, useEffect } from 'react';
import JoblyApi from '../utils/api';
import SearchForm from '../SearchForm';
import JobCardList from './JobCardList';
import Loading from '../Loading';

/**
 * List of Job
 *
 * Props: None
 * State: jobs [{job}, ...]
 *
 * RoutesList -> JobList -> {SearchForm, jobCard}
 */
function JobList() {

  const [jobs, setjobs] = useState({
    jobs: [],
    isLoading: true
  });

  useEffect(function getjobsOnLoad() {
    async function getjobs() {
      const jobs = await JoblyApi.getAllJobs();
      console.log('jobsResp', jobs);
      setjobs({
        jobs: jobs,
        isLoading: false
      });
    }
    getjobs();
  }, []);

  //Accepts formData { name: ... }
  async function search(job) {
    console.log('job', job);
    const searchedjobs = await JoblyApi.getAllJobs({title:job.name});
    console.log('searchedjob', searchedjobs);
    setjobs({
      jobs: searchedjobs,
      isLoading: false
    });
  }

  if (jobs.isLoading) return <Loading />;

  return (
    <div className="JobList">
      <SearchForm search={search} />
      <JobCardList jobs = {jobs.jobs} />
    </div>
  );
}

export default JobList;