import { useState, useEffect, useContext } from 'react';
import JoblyApi from '../utils/api';
import SearchForm from '../Form/SearchForm';
import JobCardList from './JobCardList';
import Loading from '../Loading';
import userContext from '../Context/userContext';
import { Navigate } from 'react-router-dom';

/**
 * List of Job
 *
 * Props: None
 * State: jobs [{job}, ...]
 *
 * RoutesList -> JobList -> {SearchForm, jobCard}
 */

function JobList() {
  const { user } = useContext(userContext);
  const [jobs, setjobs] = useState({
    jobs: [],
    isLoading: true
  });

  useEffect(function getjobsOnLoad() {
    async function getjobs() {
      const jobs = await JoblyApi.getJobs();

      setjobs({
        jobs: jobs,
        isLoading: false
      });
    }
    getjobs()
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
    <div className="JobList">
      <SearchForm search={search} />
      <JobCardList jobs={jobs.jobs} />
    </div>
  );
}

export default JobList;