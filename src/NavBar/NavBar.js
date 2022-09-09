import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { useContext } from "react";
import userContext from '../Context/userContext';

/** NavBar for Jobly */
function NavBar({ logout }) {
  const { user } = useContext(userContext);

  return (
    <nav className="NavBar navbar navbar-light bg-light">
      <NavLink className='navLink' to='/'>Jobly</NavLink>
      {user && <>
        <NavLink className='navLink' to='/companies'>Companies</NavLink>
        <NavLink className='navLink' to='/jobs'>Jobs</NavLink>
        <NavLink className='navLink' to='/profile'>Profile</NavLink>
        <NavLink className='navLink' to='/' onClick={logout}>Logout {user.username}</NavLink>
      </>
      }
      {!user &&
        <>
          <NavLink className='navLink' to='/signup'>Signup</NavLink>
          <NavLink className='navLink' to='/login'>Login</NavLink>
        </>
      }
    </nav>
  );
}

export default NavBar;