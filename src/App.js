import './App.css';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import JoblyApi from './api';
import userContext from "./userContext";
import NavBar from './NavBar';
import RoutesList from './RoutesList';
import { createTheme, colors, ThemeProvider } from '@mui/material';

const DEFAULT_USER = {
  username: '',
  isLoggedIn: false,
  isAdmin: false
};

const THEME = createTheme({
  palette: {
    primary: {
      main: '#58009b'
    },
    secondary: {
      main: '#3d44ea'
    }
  }
});

/** Jobly App
 *
 * Props: N/A
 *
 * State:
 * - currentUser:
 * {
 *   applications: [],
 *   email: "test@mail.com",
 *   firstName: "Test",
 *   isAdmin: false,
 *   isLoggedIn: true,
 *   lastName: "User",
 *   username: "testuser"
 * }
 * - token: string token
 *
 * App -> [NavBar, RoutesList]
 */

function App() {
  const [currentUser, setCurrentUser] = useState(DEFAULT_USER);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  console.debug(
    "App",
    "currentUser=",
    currentUser,
    "token=",
    token
  );

  // sets user in localStorage on mount or updated token

  useEffect(function setLocalUserOnRefresh() {

    async function getLocalUser() {
      const localToken = localStorage.getItem("token");
      if (localToken) {
        JoblyApi.token = localToken;
        const decodedUserData = jwt_decode(localToken);
        const localUserData = await JoblyApi.getUser(decodedUserData.username);
        setCurrentUser({ ...localUserData, isLoggedIn: true });
      }
    }

    getLocalUser();
  }, [token]);

  /** User login -------------------------------------------------- */

  async function login(username, password) {
    const token = await JoblyApi.loginUser(username, password);
    localStorage.setItem("token", token);
    setToken(token);
    const user = await JoblyApi.getUser(username, password);
    setCurrentUser({ ...user, isLoggedIn: true });
  }

  /** User logout ------------------------------------------------- */

  function logout() {
    setCurrentUser(DEFAULT_USER);
    setToken('');
    localStorage.removeItem("token");
    // TODO: is there a better way to navigate home after logout?
    // <Navigate to='/' /> not working
    navigate('/');
  }

  /** User signup
   *
   * Expected input:
   * { username, password, firstName, lastName, email }
   */
  async function signup(user) {
    const token = await JoblyApi.registerUser(user);
    setToken(token);
    setCurrentUser(currUser => ({ ...user, isLoggedIn: true }));
    navigate('/');
  }

  // TODO:
  /** User update --------------------------------------------------
   *
   * Expected input:
   * { username, password, firstName, lastName, email }
   */

  return (
    <ThemeProvider theme={THEME}>
      <div className="App">
        <userContext.Provider value={{
          user: {
            username: currentUser.username,
            isLoggedIn: currentUser.isLoggedIn,
            isAdmin: currentUser.isAdmin
          }
        }}>
          <NavBar logout={logout} />
          <RoutesList login={login} signup={signup} /** update={update} */ />
        </userContext.Provider>
      </div>
    </ThemeProvider>
  );
}


export default App;