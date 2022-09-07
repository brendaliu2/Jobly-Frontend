import { BrowserRouter, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import JoblyApi from './utils/api';
import NavBar from './NavBar/NavBar';
import RoutesList from './RoutesList';
import userContext from './Context/userContext';
import jwt from 'jwt-decode';

/**JoblyApp
 *
 * Prop: None
 * State: user: {  }
 *
 * App -> JoblyApp -> {NavBar, RoutesList}
*/
function JoblyApp() {
  // const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  async function signup(formData) {
    const token = await JoblyApi.signup(formData);
    const user = jwt(token);
    console.log("signup", user);
    localStorage.setItem('token', token);
    setToken(token);
    setUser(user);
  }

  async function login(formData) {
    const token = await JoblyApi.login(formData);
    const user = jwt(token);
    console.log("login", user);

    localStorage.setItem('token', token);
    setToken(token);
    setUser(user);
  }

  async function update(formData) {
    const user = await JoblyApi.update(formData);
    console.log("update", user);
    setUser(user);
  }

  return (
    <userContext.Provider value={{ user, token }}>
      <div className="JoblyApp">
        <BrowserRouter>
          <NavBar />
          <RoutesList
            signup={signup}
            login={login}
            update={update} />
        </BrowserRouter>
      </div>
    </userContext.Provider>
  );
}

export default JoblyApp;

