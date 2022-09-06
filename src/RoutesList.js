import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from './Home/HomePage';
import CompanyList from './Company/CompanyList';
import JobList from './Job/JobList';
import CompanyDetail from './Company/CompanyDetail';

/**Routes for Jobly
 * 
 */


function RoutesList() {
  
  
  return (
    <div className="RoutesList">

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/companies' element={<CompanyList />} />
          <Route path='/jobs' element={<JobList />} />
          <Route path='/companies/:handle' element={<CompanyDetail />} />
          <Route path='*' element={<Navigate to='/' />}/>
        </Routes>

    </div>
  );
}

export default RoutesList;