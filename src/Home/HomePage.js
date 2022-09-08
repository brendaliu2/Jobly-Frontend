import { useNavigate } from "react-router-dom";

/**Presentational Component:
 * HomePage for JoblyApp
 *
 * RoutesList -> HomePage
 */
function HomePage() {
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
      <p>All the jobs in one, convenient place.</p>
      <button onClick={loginClick} className="btn-primary btn Login-addBtn">
        Login
      </button>
      <button onClick={signupClick} className="btn-primary btn Signup-addBtn">
        Signup
      </button>
    </div>
  );
}

export default HomePage;