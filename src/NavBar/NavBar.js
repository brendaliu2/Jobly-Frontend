import { NavLink } from 'react-router-dom';
import './NavBar.css';

/** NavBar for Jobly */
function NavBar({ logout }) {
  return (
    <nav className="NavBar navbar navbar-light bg-light">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/companies'>Companies</NavLink>
      <NavLink to='/jobs'>Jobs</NavLink>
      <NavLink to='/profile'>Profile</NavLink>
      <NavLink to='/signup'>Signup</NavLink>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/' onClick={logout}>Logout</NavLink>
    </nav>
  );
}

export default NavBar;