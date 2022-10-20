import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import userContext from '../Context/userContext';
import './HomePage.css';
import jobCartoon from '../images/jobCartoon.jpeg';
import jobCartoon2 from '../images/jobCartoon2.jpeg';

/**Presentational Component:
 * HomePage for JoblyApp
 *
 * Context: user
 *  {username, firstName, lastName, email, isAdmin, applications:[]}
 *
 * RoutesList -> HomePage
 */
function HomePage() {
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  function loginClick() {
    navigate("/login");
  }

  function signupClick() {
    navigate("/signup");
  }

  return (
    <div className='HomePage'>

      <h1 className="jobly-title m-5 p-3 display-1">Jobly</h1>
      {/* <h3 className="display-5 m-2 p-2">All the jobs in one, convenient place.</h3> */}


      {user &&
        <>
          {/* <p>All the jobs in one, convenient place.</p> */}
          <h6 className="display-6">Welcome back {user.firstName}!</h6>
          <img src={jobCartoon2} alt='job-cartoon2' className="job-cartoon" />
        </>
      }
      {!user &&
        <>
          <h3 className="display-5 m-2 p-2">All the jobs in one, convenient place.</h3>
          <img src={jobCartoon} alt='job-cartoon' className="job-cartoon" />
          <div className="no-user-home">
            <button
              onClick={loginClick}
              className="btn-primary btn Login-addBtn btn-lg m-3">
              Login
            </button>
            <button
              onClick={signupClick}
              className="btn-primary btn Signup-addBtn btn-lg m-3">
              Signup
            </button>
          </div>
        </>
      }
    </div>
  );
}

export default HomePage;