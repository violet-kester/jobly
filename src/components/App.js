import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import JoblyApi from '../api';
import userContext from "../userContext";
import NavBar from './NavBar';
import RoutesList from './RoutesList';
import { theme } from '../theme';
import { Box, Container, ThemeProvider, styled } from '@mui/material';

const DEFAULT_USER = {
  username: '',
  isLoggedIn: false,
  isAdmin: false
};

const StyledBox = styled(Box)({
  height: '100%',
  minHeight: '100vh',
  width: '100%',
  backgroundColor: 'rgba(238, 171, 99, .6)',
  textAlign: 'center',
});

const StyledContainer = styled(Container)({
  minHeight: '100vh',
  padding: '0px',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'rgba(165, 235, 200, .35)',
  textAlign: 'center',
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

  return (
    <ThemeProvider theme={theme}>
      <userContext.Provider value={{
        user: {
          username: currentUser.username,
          isLoggedIn: currentUser.isLoggedIn,
          isAdmin: currentUser.isAdmin
        }
      }}>
        <StyledBox>
          <StyledContainer>
            <NavBar logout={logout} />
            <RoutesList login={login} signup={signup} /** update={update} */ />
          </StyledContainer>
        </StyledBox>
      </userContext.Provider>
    </ThemeProvider>
  );
}


export default App;