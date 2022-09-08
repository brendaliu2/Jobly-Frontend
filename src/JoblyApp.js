import { BrowserRouter, useNavigate, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
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
  const initialToken = localStorage.getItem('token') === 'undefined' ?
    null :
    localStorage.getItem('token');

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(initialToken);
  console.log('user state', user)


  useEffect(function setLocalStorage() {
    async function getUserData() {
      if (token) {
        const user = jwt(token);
        console.log('user decode token', user.username)
        const userData = await JoblyApi.getUserInfo(user.username, token);
        setUser(userData);
      }
    }
    getUserData()
  }, [token]);


  async function signup(formData) {
    const token = await JoblyApi.signup(formData);
    const user = jwt(token);
    console.log("signup", user);
    setToken(token);
    // setUser(user);
    localStorage.setItem('token', token);
  }

  async function login(formData) {
    const token = await JoblyApi.login(formData);
    const user = jwt(token);
    console.log("login", user);
    setToken(token);
    // setUser(user);
    localStorage.setItem('token', token);
  }

  async function update(formData) {
    const user = await JoblyApi.update(formData);
    console.log("update", user);
    setUser(user);
  }

  return (
    <userContext.Provider value={{ user }}>
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

