import logo from './logo.svg';
import './App.css';
import RoutesList from './RoutesList';
import {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import userContext from "./userContext";

/** App for Jobly! TODO: UPDATE ME
 *
 * Props: N/A
 *
 * State: N/A
 *
 * App -> [NavBar, RoutesList]
 */

function App() {

  const [user, setUser] = useState({
    user : {
      applied: [],
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      isLoggedIn: false,
      isAdmin: false
      }
    });
    //TODO: this should be passed in as the default prefs state,
    // which is then provided to Provider context
    const defaultPref = {
      user: {
        username: '',
        isLoggedIn: false,
        isAdmin: false,
        applied: []
      }

    }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
