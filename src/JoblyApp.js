import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import JoblyApi from './utils/api';
import NavBar from './NavBar/NavBar';
import RoutesList from './RoutesList';
import userContext from './Context/userContext';
import jwt from 'jwt-decode';
import Loading from './Loading';

/**JoblyApp
 *
 * Prop: None
 * State: user: {  }
 *
 * App -> JoblyApp -> {NavBar, RoutesList}
*/

function JoblyApp() {
  const initialToken = localStorage.getItem('token');
  const [user, setUser] = useState({
    isLoading:true,
    data: null
  });
  const [token, setToken] = useState(initialToken);
  


  useEffect(function getUserInfoAndSetLocalStorage() {
    function setLocalStorage() {
      localStorage.setItem('token', token);
    }

    async function getUserData() {
      const user = jwt(token);
      JoblyApi.token = token;
      const userData = await JoblyApi.getUserInfo(user.username);
      
      setUser({
        isLoading:false,
        data: userData});
    }

    if (token) {
      setLocalStorage();
      getUserData();
    } else {
      setUser({
        isLoading:false,
        data:null})
    }
  }, [token]);

  async function signup(formData) {
    const token = await JoblyApi.signup(formData);
    setToken(token);
  }

  async function login(formData) {
    const token = await JoblyApi.login(formData);
    setToken(token);
  }

  async function update(formData) {
    delete formData.username;
    const updatedUser = await JoblyApi.update(user.username, formData);
    setUser({
      isLoading:false,
      data:updatedUser});
  }

  function logout() {
    localStorage.clear();
    setToken(null);
    setUser({
      isLoading:false,
      data: null
    });
  }
  
  async function apply(id){
    const updatedUser = await JoblyApi.applyToJob(user.data.username, id);

    setUser({
      isLoading:false,
      data:updatedUser});
  }
  if (user.isLoading) return <Loading />;
  
  return (
    <userContext.Provider value={{ user:user.data, apply }}>
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

