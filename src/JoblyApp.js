import { BrowserRouter } from "react-router-dom";
import NavBar from './NavBar';
import RoutesList from './RoutesList';

/**JoblyApp 
 * 
 * Prop: None
 * State: None
 * 
 * App -> JoblyApp -> {NavBar, RoutesList}
*/
function JoblyApp() {
  return (
    <div className="JoblyApp">
      <BrowserRouter>
        <NavBar />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
  }
  
export default JoblyApp;