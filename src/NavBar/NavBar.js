import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Nav';
import './NavBar.css';
import { useContext } from "react";
import userContext from '../Context/userContext';

/** NavBar for Jobly */
function NavBar({ logout }) {
  const { user } = useContext(userContext);

  return (
    <nav className="">
      <Navbar expand="md" fixed='top' className='nav bg-light'>
        <Nav>
          <NavLink className='navLink brand' to='/'>Jobly</NavLink>
        </Nav>
        <Nav className="me-auto">
        </Nav>
        <Nav>
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
        </Nav>
      </Navbar>
    </nav>
  );
}

export default NavBar;