import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { useContext } from "react";
import userContext from '../Context/userContext';

/** NavBar for Jobly */
function NavBar({ logout }) {
  const { user } = useContext(userContext);

  return (
    <nav className="NavBar navbar navbar-light bg-light">
      <NavLink to='/'>Jobly</NavLink>
      {user && <>
        <NavLink to='/companies'>Companies</NavLink>
        <NavLink to='/jobs'>Jobs</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
        <NavLink to='/' onClick={logout}>Logout {user.username}</NavLink>
      </>
      }
      {!user &&
        <>
          <NavLink to='/signup'>Signup</NavLink>
          <NavLink to='/login'>Login</NavLink>
        </>
      }
    </nav>
  );
}

export default NavBar;