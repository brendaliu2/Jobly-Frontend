import { useState, useEffect } from 'react';
import JoblyApi from '../utils/api';
import SearchForm from '../Form/SearchForm';
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
  console.log("JobListing");

  const [jobs, setjobs] = useState({
    jobs: [],
    isLoading: true
  });

  useEffect(function getjobsOnLoad() {
    console.log("inside JobListing useEffect");

    async function getjobs() {
      const jobs = await JoblyApi.getJobs();

      setjobs({
        jobs: jobs,
        isLoading: false
      });
    }

    getjobs();
  }, []);

  //Accepts formData { name: ... }
  async function search(job) {
    const data = { title: job.name };
    const searchedjobs = await JoblyApi.getJobs(data);

    setjobs({
      jobs: searchedjobs,
      isLoading: false
    });
  }

  if (jobs.isLoading) return <Loading />;

  return (
    <div className="JobList container-fluid p-2">
      <div className='row justify-content-center'>
        <div className='col-8'>
          <SearchForm search={search} />
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col'>
          <JobCardList jobs={jobs.jobs} />
        </div>
      </div>
    </div>
  );
}

export default JobList;;