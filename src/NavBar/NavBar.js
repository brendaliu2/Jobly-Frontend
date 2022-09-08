import { NavLink } from 'react-router-dom';
import './NavBar.css';

/**NavBar for Jobly */
function NavBar() {
  return (
    <nav className="NavBar navbar navbar-light bg-light">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/companies'>Companies</NavLink>
      <NavLink to='/jobs'>Jobs</NavLink>
      <NavLink to='/profile'>Profile</NavLink>
    </nav>
  );
}

export default NavBar;