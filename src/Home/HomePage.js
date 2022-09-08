import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import userContext from '../Context/userContext';

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

      <h1>Jobly</h1>
      {user &&
        <>
          <p>All the jobs in one, convenient place.</p>
          <p>Welcome back {user.firstName}!</p>
        </>
      }
      {!user &&
        <>
          <button
            onClick={loginClick}
            className="btn-primary btn Login-addBtn">
            Login
          </button>
          <button
            onClick={signupClick}
            className="btn-primary btn Signup-addBtn">
            Signup
          </button>
        </>
      }
    </div>
  );
}

export default HomePage;