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
  const initialToken = localStorage.getItem('token');
  console.log("initialtoken", initialToken);

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(initialToken);
  console.log('user state', user);
  console.log('token state', token);

  useEffect(function setLocalStorage() {
    async function getUserData() {
      const user = jwt(token);
      console.log('user decode token', user, "username", user.username);

      JoblyApi.token = token;
      const userData = await JoblyApi.getUserInfo(user.username);
      console.log(userData);
      setUser(userData);
    }

    if (token) getUserData();

  }, [token]);


  async function signup(formData) {
    const token = await JoblyApi.signup(formData);
    console.log("signup", token);
    setToken(token);
    // localStorage.setItem('token', token);
  }

  async function login(formData) {
    const token = await JoblyApi.login(formData);
    console.log("login", token);
    setToken(token);
    // localStorage.setItem('token', token);
  }

  async function update(formData) {
    const username = formData.username;
    let data = {};
    for (let key in formData){
      if(key !== 'username') {
        data[key] = formData[key];
      }
    }
    console.log(data);
    const user = await JoblyApi.update(username, data);
    console.log("update", user);
    setUser(user);
  }

  function logout() {
    console.log('logout');
    setToken(null);
    setUser(null);
  }

  return (
    <userContext.Provider value={{ user }}>
      <div className="JoblyApp">
        <BrowserRouter>
          <NavBar logout={logout} />
          <RoutesList
            signup={signup}
            login={login}
            update={update}
          />
        </BrowserRouter>
      </div>
    </userContext.Provider>
  );
}

export default JoblyApp;

